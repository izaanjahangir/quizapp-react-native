import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { FaceDetector, Camera, Permissions } from 'expo';
import Variables from '../Variables';
import GeneralStyles from '../GeneralStyles';
import Styles from './Styles'
export default class Home extends Component {
    static navigationOptions = {
        title: 'Simple Quiz',
        headerStyle: {
            backgroundColor: Variables.themeColorDark,
        },
        headerTintColor: Variables.fontColorLight
    };

    constructor() {
        super();

        this.state = {
            isCamera: false,
            isLoading: false
        }

        this.openCamera = this.openCamera.bind(this);
        this.closeCamera = this.closeCamera.bind(this);
        this.detectFace = this.detectFace.bind(this);
    }

    async openCamera() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status === 'granted') {
            this.setState({ isCamera: true });
        }
        else {
            Alert.alert("Permission Denied!", "Please Allow to continue");
        }
    }

    closeCamera() {
        this.setState({ isCamera: false })
    }

    async detectFace() {
        this.setState({ isLoading: true })
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            const options = { mode: FaceDetector.Constants.Mode.fast };
            const face = await FaceDetector.detectFacesAsync(photo.uri, options);
            if (face.faces.length) {
                Alert.alert("Hola!", "Face Detected");
                this.props.navigation.navigate("QuizStart");
                this.setState({ isCamera: false })
            }
            else {
                Alert.alert("Oops!", "Face Not Detected");
            }
            this.setState({ isLoading: false })
        }
    }

    handleFacesDetected() {
        console.log("handleFacesDetected")
    }

    render() {
        const { isCamera, isLoading } = this.state;

        return (
            <View style={GeneralStyles.container}>
                {
                    isCamera ?
                        <Camera
                            style={{ position: 'relative', width: "100%", height: "100%", flexDirection: 'row', justifyContent: 'center' }}
                            ref={(ref) => this.camera = ref}
                            type={Camera.Constants.Type.front}
                        >
                            <TouchableOpacity style={[Styles.roundedBtn, Styles.darkRedBtn, Styles.topLeftAbsolute]} onPress={this.closeCamera}>
                                <Text style={Styles.fontWhite}>X</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[Styles.startBtn, { alignSelf: "flex-end", marginBottom: 10 }]} onPress={this.detectFace}>
                                <Text style={Styles.fontWhite}>Snap</Text>
                            </TouchableOpacity>
                        </Camera> :
                        <TouchableOpacity style={Styles.startBtn} onPress={this.openCamera}>
                            <Text style={Styles.fontWhite}>Start Quiz</Text>
                        </TouchableOpacity>
                }
                {
                    isLoading &&
                    <View style={GeneralStyles.loaderContainer}>
                        <ActivityIndicator size="large" color={Variables.themeColorDark} />
                    </View>
                }
            </View>
        )
    }
}
