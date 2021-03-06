import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Modal from 'react-modal';
import './teamList.scss'
import"./createTeam.scss"
import './teamItem.scss'
import TeamItem from './teamItem'; 

const close = require('./images/close.png')
const add = require('./images/add.png')

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },

    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border:'none',
        backgroundColor:'rgba(0, 0, 0, 0)'
    },

};


class TeamList extends Component{

    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }


    markedTeam(){
        //星标团队
        return(
            <div className="small-container">
                <span className="title">星标团队</span>
                <ul>
                    <li>星标团队列表</li>
                </ul>
            </div>
        )
    }

    myOwnTeam(){
        //我拥有的团队，需要判断是否为团队主管或超级管理员，不是则没有此项
        //if(!this.props.isManager)
        return(
            <div className="small-container">
                <span className="title">我拥有的团队</span>
                <ul>
                    <li><TeamItem></TeamItem></li>
                    
                    <li key="add" onClick={this.openModal}>
                       <div className="addbtn" onClick={this.openModal}>
                          <div className={"icon-container"} >
                             <img id="addIcon" src={add}/>
                          </div>
                       </div>
                       <p>创建新团队</p>
                    </li>
                </ul>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >

                    <div className="createTeam-container">
                        <div className="header">
                            <p className="title">创建新团队</p>
                            <img id="cancel" src={close} onClick={this.closeModal} />
                        </div>
                        <input type="text" placeholder="团队名称"></input>
                        <button>完成创建</button>
                    </div>
                </Modal>
            </div>
        )
    }

    myTeam(){
        //我参与的团队
        return(
            <div className="small-container">
                <span className="title">我参与的团队</span>
                <ul>
                    <li><p>团队</p></li>
                </ul>
                
            </div>
        )
    }

    render(){
        return (
            <div className="teamList-container">
                {this.markedTeam()}
                {this.myOwnTeam()}
                {this.myTeam()}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {

    }
}

const mapDispatchToProps = {
    
}

export default TeamList = connect(mapStateToProps, mapDispatchToProps)(TeamList);