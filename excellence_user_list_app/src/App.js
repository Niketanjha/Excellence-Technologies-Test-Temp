import React from 'react';
import './App.css';
import {Box,CssBaseline,Container,Grid,Card,CardContent,Typography} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={pageData:[],Data:[],loading:true,pageNumber:1,maxPage:1};
  }
  componentDidMount(){
    const pageNumber=this.state.pageNumber;
    fetch('https://reqres.in/api/users?page='+pageNumber).then((res)=>{
      return res.json()}).then((result)=>{
      this.setState({Data:result.data,pageData:result,loading:false});
      return result; 
    }).catch(err => console.error(err));
  }
  componentDidUpdate(){
    this.componentDidMount();
  }

  setPageNumber=(value)=>{
    this.setState({pageNumber:value});
  }
  
  render(){
    return(
      <div>
        <CssBaseline />
        <Container component={Box} py={3}>
          <Grid container spacing={2}>
            {this.state.Data.map((item)=>{
              return(
                <Grid item sm={4} key={item.id} style={{padding:20}} >
                  <Card style={{height:250}}>
                    <CardContent align={'center'} >
                      <img src={item.avatar} alt="Network Error"></img>
                      <Typography>{item.first_name} {item.last_name}</Typography>
                      <Typography>{item.email} </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <Pagination align={'center'} style={{marginTop:10 }}
            count={this.state.pageData.total_pages} color="secondary" variant="outlined" 
            defaultPage={1} hideNextButton={true} hidePrevButton={true} 
            onChange={(event,value)=>this.setPageNumber(value)}
          />
        </Container>
      </div>
    );
  }
}

export default App;
