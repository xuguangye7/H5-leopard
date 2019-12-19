import React, { Component, Fragment } from 'react';
import { Icon } from 'antd'
import { OutterContainer, InputOutter, BtnContainer, SendBtn, EmojiTab } from '../components/style'
export default class HyperTextInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textareaH: '8vw',
            hyperText:"",
            showEmojiTab: false,
            emojiList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        }
    }
    render() {
        return (
            <Fragment>
                {/* <div style={{
                    position:'fixed',
                    top:'0',
                    left:'0',
                    width:'100%',
                    height:'100%',
                    zIndex:'-10',
                    backgroundColor:'',
                    background:'url(img/add.jpg) center center /  100% 100%',
                }}>
                </div> */}
                <div id="content" style={{
                    position:'absolute',
                    top:'8%',
                    left:'2.5%',
                    outline:'1px solid #eee',
                    border: '1px solid #ccc',
                    background: 'white',
                    padding: '9px',
                    height: '300px',
                    width: '90%',
                    margin:'0 auto',
                    fontSize: '18px',
                    boxShadow:'5px 5px gray'
                }}>

                </div>
                

                <OutterContainer>
                    <InputOutter>
                            {/*用可编辑的div代替textarea:*/}
                            <div className='inputDiv'
                                ref={(inputDiv) => { this.inputDiv = inputDiv }} 
                                contentEditable={true}
                                style={{ height: '20px',width:'70%' }}
                                onKeyUp={this.divInput.bind(this)}
                            />
                        <BtnContainer style={{marginRight:'17px',textAlign:'center'}}>
                            <div style={{display:"flex",marginBottom:'5px',justifyContent:"space-around",alignItems:"center"}}>
                            <Icon
                                onClick={this.showEmojiTab.bind(this)}
                                type="smile"
                                style={{ color: this.state.showEmojiTab ? '#1890FF' : '#555',marginRight:'7px', fontSize: "1.2em",outline:"none",display:"flex",justifyContent:"center",alignItems:"center" }}
                            />
                            {
                                this.state.hyperText?
                                <SendBtn onClick={this.sendMsg.bind(this)} style={{
                                    
                                }}>发送</SendBtn>:
                                <SendBtn style={{color:"#999",background:"#ddd"}}>发送</SendBtn>
                            }
                            </div>
                        </BtnContainer>
                    </InputOutter>
                    <EmojiTab style={{height:this.state.showEmojiTab?"40vw":"0"}}>
                        {this.state.emojiList.map((item, index) => <div key={index}>
                            <img alt="" data-index={index} onClick={this.chooseEmoji.bind(this,item)} src={`/emoji/emoji${item}.svg`} />
                        </div>)}
                    </EmojiTab>
                </OutterContainer>
            </Fragment>
        )
    }
    showEmojiTab() {
        this.setState({
            showEmojiTab: !this.state.showEmojiTab
        })
    }
    chooseEmoji(index){
        this.inputDiv.innerHTML+=`<img src="/emoji/emoji${index}.svg" />`;
        this.divInput.call(this);
    }
    divInput() {
        this.setState({
            hyperText:this.inputDiv.innerHTML
        })
    }
    sendMsg(){
        console.log('即将发送的msg内容:\n',this.state.hyperText);
        var content=document.getElementById('content');
        content.innerHTML+="<p style='background:pink;float:right;border:1px solid black;'>"+this.state.hyperText+"</p>"+"<br/>"
        this.inputDiv.innerHTML='';
        this.setState({
            hyperText:'',
            showEmojiTab: false
        })
    }
}