import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Gailv extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#fff"}}>
                <NavBar
                leftContent={[
                    <Link to='/app/subject'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>概率与统计专题</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>高中数学概率专题练习（精编版）</h3>
                    <p style={{lineHeight:"25px"}}>一、（2016全国Ⅰ卷，文19，12分）某公司计划购买1台机器，该种机器使用三年后即被淘汰．机器有一易损零件，在购进机器时，可以额外购买这种零件作为备件，每个200元．在机器使用期间，如果备件不足再购买，则每个500元．现需决策在购买机器时应同时购买几个易损零件，为此搜集并整理了100台这种机器在三年使用期内更换的易损零件数，得下面柱状图：</p>
                    <img src="../img/gailv1.png" style={{width:'100%'}}/>
                    <p style={{lineHeight:"25px"}}>记x表示1台机器在三年使用期内需更换的易损零件数，y表示1台机器在购买易损零件上所需的费用（单位：元），n表示购机的同时购买的易损零件数．</p>
                    <p>（Ⅰ）若n＝19，求y与x的函数解析式；</p>
                    <p style={{lineHeight:"25px"}}>（Ⅱ）若要求“需更换的易损零件数不大于n”的频率不小于0.5，求n的最小值；</p>
                    <p style={{marginBottom:"200px",lineHeight:"25px"}}>（Ⅲ）假设这100台机器在购机的同时每台都购买19个易损零件，或每台都购买20个易损零件，分别计算这100台机器在购买易损零件上所需费用的平均数，以此作为决策依据，购买1台机器的同时应购买19个还是20个易损零件？</p>
                    <p style={{lineHeight:"25px"}}>二、2013全国Ⅰ卷，文18，12分）为了比较两种治疗失眠症的药(分别称为A药，B药)的疗效，随机地选取20位患者服用A药，20位患者服用B药，这40位患者在服用一段时间后，记录他们日平均增加的睡眠时间(单位：h)．试验的观测结果如下：</p>
                    <p>服用A药的20位患者日平均增加的睡眠时间：</p>
                    <p>0.6　1.2　2.7　1.5　2.8　1.8　2.2　2.3　3.2　3.5</p>
                    <p>2.5　2.6　1.2　2.7　1.5　2.9　3.0　3.1　2.3　2.4</p>
                    <p>服用B药的20位患者日平均增加的睡眠时间：</p>
                    <p>3.2　1.7　1.9　0.8　0.9　2.4　1.2　2.6　1.3　1.4</p>
                    <p>1.6　0.5　1.8　0.6　2.1　1.1　2.5　1.2　2.7　0.5</p>
                    <p style={{lineHeight:"20px"}}>（Ⅰ）分别计算两组数据的平均数，从计算结果看，哪种药的疗效更好？</p>
                    <p style={{lineHeight:"20px"}}>（Ⅱ）根据两组数据完成下面茎叶图，从茎叶图看，哪种药的疗效更好？</p>
                    <img src="../img/gailv2.png" style={{width:'100%',marginBottom:"200px"}}/>
                    <p style={{lineHeight:"20px"}}>三、（2012全国卷，文18，12分）某花店每天以每枝5元的价格从农场购进若干枝玫瑰花，然后以每枝10元的价格出售．如果当天卖不完，剩下的玫瑰花作垃圾处理．</p>
                    <p style={{lineHeight:"20px"}}>（Ⅰ）若花店一天购进17枝玫瑰花，求当天的利润y(单位：元)关于当天需求量n(单位：枝，n∈N)的函数解析式；</p>
                    <p style={{lineHeight:"20px"}}>（Ⅱ）花店记录了100天玫瑰花的日需求量(单位：枝)，整理得下表：</p>
                    <img src="../img/gailv3.png" style={{width:'100%'}}/>
                    <p style={{lineHeight:"20px"}}>（ⅰ）假设花店在这100天内每天购进17枝玫瑰花，求这100天的日利润(单位：元)的平均数；</p>
                    <p style={{marginBottom:"200px",lineHeight:"20px"}}>（ⅱ）若花店一天购进17枝玫瑰花，以100天记录的各需求量的频率作为各需求量发生的概率，求当天的利润不少于75元的概率．</p>
                    <p style={{lineHeight:"25px"}}>四、（2013全国Ⅱ卷，文19，12分）经销商经销某种农产品，在一个销售季度内，每售出1t该产品获利润500元，未售出的产品，每1t亏损300元．根据历史资料，得到销售季度内市场需求量的频率分布直方图，如图所示．经销商为下一个销售季度购进了130t该农产品，以X(单位：t，100≤X≤150)表示下一个销售季度内的市场需求量，T(单位：元)表示下一个销售季度内经销该农产品的利润．</p>
                    <p>（Ⅰ）将T表示为X的函数；</p>
                    <p>（Ⅱ）根据直方图估计利润T不少于57　000元的概率．</p>
                    <img src="../img/gailv4.png"  style={{marginBottom:"200px",width:"100%"}}/>
                    <p></p>
                </WingBlank>
            </div>
        )
    }
}