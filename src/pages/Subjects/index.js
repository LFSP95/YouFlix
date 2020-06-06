import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import Styles from './styles';
import Api from '../../../services/Api';
import BancoData from '../Data/BancoData.json';
import LogicaData from '../Data/LogicaData.json';
import MobileData from '../Data/MobileData.json';
import SistemasData from '../Data/SistemasData.json';
import TesteData from '../Data/TesteData.json';
import WebData from '../Data/WebData.json';
import Subject from '../Data/Subjects.json';

export default function Subjects({ navigation, route }) {

const idSubject = route.params.id;
const [video, setVideo] = useState('');
const [subject, setSubject] = useState('');
const apiKey = 'AIzaSyDzfFqkp9bRBGCBwYgttaHuXFGqR5Nxf0g';
const videosObject = [];
// const subjects = [];

useEffect(() => {
    (async function getVideos() {
       
        console.log(Subject);
        switch(idSubject) {
            case '1':
                setSubject(Subject[0].nameSubjects);
                for(let i = 1; i < LogicaData.length; i++) {
                    const req = await Api.get(`/videos?part=snippet&id=${LogicaData[i].videoID}&key=${apiKey}`);
                    videosObject.push({
                        id: i.toString(),
                        title: req.data.items[0].snippet.title,
                        description: req.data.items[0].snippet.description,
                        thumb: req.data.items[0].snippet.thumbnails.default.url,
                        videoId: LogicaData[i].videoID
                    });
                }
                setVideo(videosObject);
                break;

            case '2':
                setSubject(Subject[1].nameSubjects);
                for(let i = 0; i < SistemasData.length; i++) {
                    const req = await Api.get(`/videos?part=snippet&id=${SistemasData[i].videoID}&key=${apiKey}`);
                    videosObject.push({
                        id: i.toString(),
                        title: req.data.items[0].snippet.title,
                        description: req.data.items[0].snippet.description,
                        thumb: req.data.items[0].snippet.thumbnails.default.url
                    });
                }
                setVideo(videosObject);
                break;

            case '3':
                setSubject(Subject[2].nameSubjects);
                for(let i = 0; i < MobileData.length; i++) {
                    const req = await Api.get(`/videos?part=snippet&id=${MobileData[i].videoID}&key=${apiKey}`);
                    videosObject.push({
                        id: i.toString(),
                        title: req.data.items[0].snippet.title,
                        description: req.data.items[0].snippet.description,
                        thumb: req.data.items[0].snippet.thumbnails.default.url
                    });
                }
                setVideo(videosObject);
                break;

            case '4':
                setSubject(Subject[3].nameSubjects);
                for(let i = 0; i < BancoData.length; i++) {
                    const req = await Api.get(`/videos?part=snippet&id=${BancoData[i].videoID}&key=${apiKey}`);
                    videosObject.push({
                        id: i.toString(),
                        title: req.data.items[0].snippet.title,
                        description: req.data.items[0].snippet.description,
                        thumb: req.data.items[0].snippet.thumbnails.default.url
                    });
                }
                setVideo(videosObject);
                break;

            case '5':
                setSubject(Subject[4].nameSubjects);
                for(let i = 0; i < WebData.length; i++) {
                    const req = await Api.get(`/videos?part=snippet&id=${WebData[i].videoID}&key=${apiKey}`);
                    videosObject.push({
                        id: i.toString(),
                        title: req.data.items[0].snippet.title,
                        description: req.data.items[0].snippet.description,
                        thumb: req.data.items[0].snippet.thumbnails.default.url
                    });
                }
                setVideo(videosObject);
                break;
            
            case '6':
                setSubject(Subject[5].nameSubjects);
                for(let i = 0; i < TesteData.length; i++) {
                    const req = await Api.get(`/videos?part=snippet&id=${TesteData[i].videoID}&key=${apiKey}`);
                    videosObject.push({
                        id: i.toString(),
                        title: req.data.items[0].snippet.title,
                        description: req.data.items[0].snippet.description,
                        thumb: req.data.items[0].snippet.thumbnails.default.url
                    });
                }
                setVideo(videosObject);
                break;
        }
        
    })();
}, []);
    return (
        <View style={Styles.body}>            
            <Text style={Styles.title}>{subject}</Text>
            <FlatList style={Styles.list} data={video} keyExtractor={videos => videos.id} renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => { navigation.navigate('Player', { videoId: item.videoId, title: item.title }) }} style={Styles.videoButton}>
                        <Image source={{ uri: item.thumb }} style={Styles.thumb} />
                        <Text style={Styles.titleVideo}>{ item.title }</Text>
                        <Text style={Styles.channelName}>{ item.description }</Text>
                    </TouchableOpacity>
                );
            }} />
        </View>
    );
}