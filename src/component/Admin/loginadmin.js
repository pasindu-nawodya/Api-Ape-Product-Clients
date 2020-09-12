import React, { Component } from 'react';
import './css/Login.css';

export default class LoginStockMan extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded:false,
            eMail:'',
            password:'',
            uid:'',
            confirmUser:[]
        }
    }

    componentDidMount(){
        fetch('https://apiape-backend.herokuapp.com/user/')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                isLoaded:true,
                items:json,
            })
            console.log(json)
        });
    }

    NameSet= event=>{
        this.setState({
            eMail:event.target.value
        })
    }

    passwordSet = event =>{
        this.setState({
            password:event.target.value
        })
    }

    checkUser= event =>{
        
        var i = 0;
        var count = this.state.items.length;
        while(count>i){
            if(this.state.items[i].uemail==this.state.eMail){
                this.setState({
                    uid: this.state.items[i]._id
                })
            }
            i=i+1;
        }

        fetch('https://apiape-backend.herokuapp.com/user/'+this.state.uid)
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                confirmUser:json,
            })
        });

        if(this.state.confirmUser.upassword == this.state.password){
            alert("Welcome to the System!")
        }else{
            alert("check details again")
        }

    }



    render() {
        return (
            
            <form >
            <div className={'authBox'}>
                <div className={'leftBox'}>
                    <div className={'bgGreen'} />
                    <div className={'imageAuth'} />                    
                    <div className={'imageText bold style1'}>LOGIN</div>
                    <div className={'imageText style2'}>Administrtor</div>
                </div>  
                <div className={'rightBox'}>
                    <center>
                    <div className={'box'}>                    
                        <div className={'titleAuth'}>Login</div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} onChange={this.NameSet} type={'email'} placeholder={'E-mail'} />
                        </div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} onChange={this.passwordSet} type={'password'} placeholder={'Password'} />
                        </div>
                        <br />
                        <div className={'contentBox'}>                            
                            <div className={'text1'}>Forgot Password? </div>
                        </div>
                        <center>
                            <div className={'btnAuth'} onClick={this.checkUser}>Login</div>
                        </center>
                    </div>
                    </center>
                </div>
                <div className={'phoneBox'}>
                    <center>
                    <div className={'phoneBorder'}>                    
                        <div className={'titleAuth'}>Login</div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} onChange={this.NameSet} type={'email'} placeholder={'Email'} />
                        </div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} onChange={this.passwordSet} type={'password'} placeholder={'Password'} />
                        </div>
                        <br />
                        <div className={'contentBox'}>                            
                            <div className={'text1'}>Forgot Password? </div>
                        </div>
                        <center>
                            <div className={'btnAuth'} onClick={this.checkUser}>Login</div>
                        </center>
                    </div>
                    </center>
                </div>                         
            </div>
            </form>
        )
    }
}
