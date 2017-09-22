import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';
export class Layout extends React.Component<{}, {}> {
    // public render() {
    //     return <div>
    //         <NavMenu/>
    //         <div className='container'>
    //             {this.props.children}
    //         </div>
    //         <div className='footer'>
    //             <div className="container">
    //                 <div>本站使用<a href="https://github.com/czihong/DotNetCoreFans"> DotNetCoreFans </a>构建</div>
    //                 <div>.Net Core 中文社区希望能给所有喜欢 .Net Core 和喜欢技术的朋友，提供一个交流的地方</div>
    //             </div>
    //         </div>
    //     </div>;
    // }

    public render() {
        return (
            <div>
                <Container>
                    <NavMenu />
                </Container>
                <Container className="container-body-dotnet">
                    {this.props.children}
                </Container>
                <Container className="container-footer-dotnet">
                    <Footer />
                </Container>
            </div>
        );
    }
}
