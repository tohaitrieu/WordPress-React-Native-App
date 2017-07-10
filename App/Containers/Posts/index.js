import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right} from 'native-base';
import {View, FlatList, Image, StyleSheet, Dimensions} from 'react-native';

//import Config from '../../Components/Config.js';

export default class Posts extends Component {
	constructor(props){
		super(props);
		this.state ={
			allposts:[],
			page:0,
			per_page:0
		}
	}
	loadMore(){
		this.setState({
			per_page: this.state.per_page + 10
		}, ()=>{
			fetch("https://isach.net/wp-json/wp/v2/posts?per_page=" + this.state.per_page)
	  		.then((response)=>response.json())
	  		.then((responseJson)=>{
	  		this.setState({
	  			allposts:this.state.allposts.concat(responseJson)
	  		});
	  	});
		});
	}
  	render() {
	  	const { params } = this.props.navigation.state;
	    return (
	    	<Container>
	    	<Content>
			        <FlatList
			        onEndReachedThreshold="0"
			        onEndReached={()=>{this.loadMore()}}
			        data={this.state.allposts}
			        renderItem={({ item }) => (
			        	
			        	<Card>
				            <CardItem cardBody>
				              <Image source={{uri: item.mobiconnector_feature_image.mobiconnector_large}} style={{height: 200, width: null, flex: 1}}/>
				            </CardItem>
				            <CardItem>
				            	<Text>{item.title.rendered}</Text>
				            </CardItem>
				            <CardItem>
				              <Left>
				                <Button transparent>
				                  <Icon active name="eye" />
				                  <Text> {item.mobiconnector_total_views} lượt xem</Text>
				                </Button>
				              </Left>
				              <Body>
				                <Button transparent>
				                  <Icon active name="chatbubbles" />
				                  <Text>{item.mobiconnector_total_comments.approved} Comments</Text>
				                </Button>
				              </Body>
				              <Right>
					              <Button transparent>
					              	<Icon active name="time"/>
					                <Text> 11h ago</Text>
					               </Button>
				              </Right>
				            </CardItem>
				          </Card>
			        )}
			      />
			</Content>
			</Container>

	    );
	  }
  //Fetch Posts from URL
  	componentDidMount(){
	  	fetch("https://isach.net/wp-json/wp/v2/posts?per_page=10")
	  	.then((response)=>response.json())
	  	.then((responseJson)=>{
	  		this.setState({
	  			allposts:responseJson
	  		});
	  	});
	  }
}