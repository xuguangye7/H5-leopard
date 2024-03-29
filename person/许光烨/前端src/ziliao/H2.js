import React, { Component } from 'react'
import {NavBar,Icon,WhiteSpace,Tabs,WingBlank,List} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class H2 extends Component {
    render() {
        return (
            <div style={{fontFamily:'Kaiti'}}>
                <NavBar
                leftContent={[
                    <Link to='/ziliao'>
                        <Icon key="0" type="left" style={{color:'white'}}/>
                    </Link>
                ]}
                style={{backgroundColor:'#099ff5',color:'white',textAlign:'center'}}
                ><h3>函数的性质</h3></NavBar>
                <WhiteSpace/>
                <WingBlank>
                    <h3>函数的性质</h3>
                    <p>
                    1.函数解析式子的求法
                    </p>
                    <span>
                    （1）、函数的解析式是函数的一种表示方法，要求两个变量之间的函数关系时，
                    一是要求出它们之间的对应法则，二是要求出函数的定义域.
                    </span><br/>
                    <span>
                    （2）、求函数的解析式的主要方法有:
                    </span>
                    <p style={{marginLeft:'50px'}}>
                    1）代入法：
                    </p>
                    <p style={{marginLeft:'50px'}}>
                    2）待定系数法：
                    </p>
                    <p style={{marginLeft:'50px'}}>
                    3）换元法：
                    </p>
                    <p style={{marginLeft:'50px'}}>
                    4)拼凑法：
                    </p>
                    <p>
                    2.定义域：能使函数式有意义的实数x的集合称为函数的定义域。
                    </p>
                    <p>
                    求函数的定义域时列不等式组的主要依据是：
                    </p>
                    <span>
                    (1)分式的分母不等于零； <br/>
                    (2)偶次方根的被开方数不小于零；<br/>
                    (3)对数式的真数必须大于零；<br/>
                    (4)指数、对数式的底必须大于零且不等于1.  <br/>
                    (5)如果函数是由一些基本函数通过四则运算结合而成的.那么，它的定义域是使各部分都有意义的x的值组成的集合.<br/>
                    (6)指数为零底不可以等于零，  <br/>
                    (7)实际问题中的函数的定义域还要保证实际问题有意义.
                    </span>
                    <p>
                    3、相同函数的判断方法：
                    </p>
                    <span>
                    ①表达式相同（与表示自变量和函数值的字母无关）<br/>②定义域一致(两点必须同时备)
                    </span>
                    <p>
                    4、区间的概念：
                    </p>
                    <span>
                    （1）区间的分类：开区间、闭区间、半开半闭区间<br/>
                    （2）无穷区间<br/>
                    （3）区间的数轴表示
                    </span>
                    <p>
                    5、值域 （先考虑其定义域）
                    </p>
                    <span>
                    （1）观察法：直接观察函数的图像或函数的解析式来求函数的值域；  <br/>
                    （2）反表示法：针对分式的类型，把Y关于X的函数关系式化成X关于Y的函数关系式，由X的范围类似求Y的范围。<br/>
                    (3)配方法：针对二次函数的类型，根据二次函数图像的性质来确定函数的值域，注意定义域的范围。  <br/>
                    (4)代换法（换元法）：作变量代换，针对根式的题型，转化成二次函数的类型。
                    </span>
                    <p>
                    6.分段函数   
                    </p>
                    <span>
                    （1）在定义域的不同部分上有不同的解析表达式的函数。<br/>
                    （2）各部分的自变量的取值情况．<br/>
                    （3）分段函数的定义域是各段定义域的交集，值域是各段值域的并集． <br/>
                    （4）常用的分段函数有取整函数、符号函数、含绝对值的函数
                    </span>
                    <p>
                    7．映射
                    </p>
                    <span>
                    一般地，设A、B是两个非空的集合，如果按某一个确定的对应法则f，使对于集合A中的任意一个元素x，在集合B中都有唯一确定的元素y与之对应，那么就称对应f：A B为从集合A到集合B的一个映射。记作“f（对应关系）：A（原象） B（象）”
                    对于映射f：A→B来说，则应满足：
                    (1)集合A中的每一个元素，在集合B中都有象，并且象是唯一的；<br/>
                    (2)集合A中不同的元素，在集合B中对应的象可以是同一个；<br/>
                    (3)不要求集合B中的每一个元素在集合A中都有原象。<br/>
                    <br/>
                    注意：映射是针对自然界中的所有事物而言的，而函数仅仅是针对数字来说的。所以函数是映射，而映射不一定的函数
                    </span>
                </WingBlank>
            </div>
        )
    }
}
