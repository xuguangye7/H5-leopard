import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Shulie extends Component {
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
                ><h3>数列专题</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>高中数学数列专题练习（精编版）</h3>
                    <p style={{lineHeight:"20px"}}>1．设数列an、bn都是等差数列，且a1=25，b1=75，a2+b2=100，那么由an+bn所组成的数列的第37项值为（  ）  </p>
                    <p>A．0  B．37  C．100 D．－37</p>
                    <p style={{lineHeight:"20px"}}>2.an是首项a1＝1，公差为d＝3的等差数列，如果an＝2 005，则序号n等于(     )．</p>
                    <p>A．667  B．668  C．669  D．670 </p>
                    <p style={{lineHeight:"20px"}}>3.在各项都为正数的等比数列an中，首项a1＝3，前三项和为21，则a3＋a4＋a5＝(     )．</p>
                    <p style={{marginBottom:"120px",lineHeight:"25px"}}>4.某种汽车购车费用10万元，每年应交保险费、养路费及汽油费合计9千元，汽车的维修费平均为第一年2千元，第二年4千元，第三年6千元，…，各年的维修费平均数组成等差数列，问这种汽车使用多少年报废最合算（即使用多少年时，年平均费用最少）？

</p>
                    <p style={{lineHeight:"25px"}}>5.从社会效益和经济效益出发，某地投入资金进行生态环境建设，并以此发展旅游产业，根据规划，本年度投入800万元，以后每年投入将比上年减少1/5 ，本年度当地旅游业收入估计为400万元，由于该项建设对旅游业的促进作用，预计今后的旅游业收入每年会比上年增加 1/4.</p>
                    <p style={{lineHeight:"25px"}}>(1)设n年内(本年度为第一年)总投入为an万元，旅游业总收入为bn万元，写出an,bn的表达式；</p>
                    <p style={{marginBottom:"120px",lineHeight:"20px"}}>(2)至少经过几年，旅游业的总收入才能超过总投入？</p>
                    <p style={{lineHeight:"25px"}}>6.已知数列an的前n项和为Sn，且an是Sn与2的等差中项，数列bn中，b1=1，点P（bn，bn+1）在直线x-y+2=0上。</p>
                    <p>（1）求a1和a2的值；</p>
                    <p>（2）求数列an，bn的通项an和bn；</p>
                    <p style={{marginBottom:"120px"}}>（3）设cn=an·bn，求数列cn的前n项和Tn。</p>
                    <p>7.已知等差数列an的前9项和为153．</p>
                    <p>（1）求 a5；</p>
                    <p style={{marginBottom:"120px",lineHeight:"25px"}}>（2）若a2=8，从数列an中，依次取出第二项、第四项、第八项，……，第2^n项，按原来的顺序组成一个新的数列cn，求数列cn 的前n项和sn.</p>
                    <p>8.</p>
                    <img src="../img/shulie1.png" style={{width:'100%',marginBottom:"120px"}}/>
                    <p></p>
                    <p></p>

                </WingBlank>
            </div>
        )
    }
}