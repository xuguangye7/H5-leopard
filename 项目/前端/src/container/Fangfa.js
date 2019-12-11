import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {NavBar,Icon,WhiteSpace,Tabs,List} from 'antd-mobile'
export default class Fangfa extends Component {
    render() {
        return (
            <div>
                <NavBar
                leftContent={[
                    <Link to='/app/home'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>技巧与方法</h3></NavBar>
                
                <img src="img/fangfa.jpg" style={{width:"100%"}}/>
                <div>
                    <p style={{float:"left",marginLeft:"5px",width:"95%",fontSize:"20px",float:"left",marginLeft:"10px"}}>小编分享</p>
                    <div style={{float:"left",marginLeft:"7px",width:"95%",borderRadius:"8px",backgroundColor:"#fff",lineHeight:"25px"}}>
                        <p style={{width:"95%",marginLeft:"10px"}}><span style={{float:"left",marginLeft:"7px",fontWeight:"bolder",fontSize:"18px"}}>日积月累：</span>平时学习要注重基础，有一个良好的知识储备，才是学习的关键，听取老师的结题方法，取长补短，多多总结。灵活的掌握多种结题方法和审题的切入点，你会发现你会有一个质的飞越，当然，这需要平时的学习，总结，和平时的练习。</p>
                        <p style={{width:"95%",marginLeft:"10px"}}><span style={{float:"left",marginLeft:"7px",fontWeight:"bolder",fontSize:"18px"}}>考试技巧：</span>考试才是我们的练兵场，我们需要有一个良好的态度去面对每一次考试，要好好把握每一次考试，把每一次考试都当成高考，合理的分配考试时间，先易后难，要把真正掌握的知识得到分，才是真本事，也是我们的最终目的。</p>
                        <p style={{width:"95%",marginLeft:"10px"}}><span style={{float:"left",marginLeft:"7px",fontWeight:"bolder",fontSize:"18px"}}>对待分数：</span>理性的看待分数，考好不要骄傲，考坏不要气馁，在从中查漏补缺才是关键，找到自己的不足之处才是考试的最终目的。</p>
                    </div>
                    <p style={{float:"left",marginLeft:"5px",width:"95%",fontSize:"20px",float:"left",marginLeft:"10px"}}>大佬分享</p>
                    <div style={{float:"left",marginLeft:"7px",width:"95%",borderRadius:"8px",backgroundColor:"#fff",lineHeight:"25px"}}>
                        <p style={{width:"95%",marginLeft:"25px",float:"left",fontWeight:"bolder",fontSize:"18px"}}>注重基础 （浙江省理科状元 卢毅）</p>
                        <p style={{width:"95%",marginLeft:"10px"}}>首先是面，这是基础。在接触了一定量的题目之后，要注意总结。看哪些题用到了同一个知识点，这些题又是用了哪一些方法。将多而杂的题目归结成具体的知识结构与方法。这就是所说的点了。下面的工作就是由点及面了。将这些总结出来的规律方法投入到具体的实践中去，当然，这里的面不是指数量上的多少，而是指抽象的一类。在总结好方法，梳理好知识要点后，相关的一类题就解决了，也就不用再大量做题了。</p>
                        <p style={{width:"95%",marginLeft:"25px",float:"left",fontWeight:"bolder",fontSize:"18px"}}>答题方法 （福建文科状元 曾春明）</p>
                        <p style={{width:"95%",marginLeft:"10px"}}>数学能得高分与否在于速度与准确度结合是否合理。先说速度，考场上2小时的统筹安排决定着成绩的高低，一般来说，用15分钟的时间来完成选择题，5分钟的时间完成填空题;用60分钟的时间完成运算题，剩下半小时检查试卷。而要做到这些，就需要在高考复习的一年里，坚持每天做一份以上的试卷，即使在最后的冲刺阶段也必须每天保持一定的练习量，只有这样才能在考场上调动一切注意力，一切困难才能够迎刃而解。</p>
                        <p style={{width:"95%",marginLeft:"25px",float:"left",fontWeight:"bolder",fontSize:"18px"}}>数学思想 （贵州文科状元 黄厚瀚）</p>
                        <p style={{width:"95%",marginLeft:"10px"}}>在做一道题之前，我们要有数学思维的意识，不要一下子就落入常规的解题思路中，而是要用某一种数学思想来解决这道题。解完后或是看完一道题的例解，就要明确用了什么方法、什么数学思想，马上找类似的题加以巩固练习。</p>
                        
                    </div>
                </div>
            </div>
        )
    }
}
