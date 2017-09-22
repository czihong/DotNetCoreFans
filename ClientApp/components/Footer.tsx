import * as React from 'react';
import { Container } from 'reactstrap';

export class Footer extends React.Component<{}, {}> {
    public render() {
        return (
            <Container>
                <div>本站使用<a href="https://github.com/czihong/DotNetCoreFans"> DotNetCoreFans </a>构建</div>
                <div>.Net Core 中文社区希望能给所有喜欢 .Net Core 和喜欢技术的朋友，提供一个交流的地方</div>
            </Container>
        );
    }
}