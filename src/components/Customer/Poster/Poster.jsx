import React, { Component } from 'react';
import { Container } from 'reactstrap'
import './Poster.scss'
import { UncontrolledCarousel } from 'reactstrap';
import { Link } from "react-router-dom"
import imgMovie_2 from '../../../assets/img/poster_2.jpg';
import imgMovie_1 from '../../../assets/img/poster_1.jpg';
import imgMovie_3 from '../../../assets/img/poster_3.jpg';
const items = [
    {
        src: imgMovie_2,
    },
    {
        src: imgMovie_1,
    },
    {
        src: imgMovie_3,
    }
];

export default class Poster extends Component {
    render() {
        return (
            <div className="poster">
                <Container className="content-poster">
                    <Link to="detailfilm">
                        <UncontrolledCarousel items={items} autoPlay={false} indicators={false} interval={false}>
                        </UncontrolledCarousel>
                    </Link>
                </Container>
            </div>
        );
    }
}
// export default class Poster extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { activeIndex: 0 };
//         this.next = this.next.bind(this);
//         this.previous = this.previous.bind(this);
//         this.goToIndex = this.goToIndex.bind(this);
//         this.onExiting = this.onExiting.bind(this);
//         this.onExited = this.onExited.bind(this);
//     }

//     onExiting() {
//         this.animating = true;
//     }

//     onExited() {
//         this.animating = false;
//     }

//     next() {
//         if (this.animating) return;
//         const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
//         this.setState({ activeIndex: nextIndex });
//     }

//     previous() {
//         if (this.animating) return;
//         const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
//         this.setState({ activeIndex: nextIndex });
//     }

//     goToIndex(newIndex) {
//         if (this.animating) return;
//         this.setState({ activeIndex: newIndex });
//     }

//     render() {
//         const { activeIndex } = this.state;

//         const slides = items.map((item) => {
//             return (
//                 <CarouselItem
//                     onExiting={this.onExiting}
//                     onExited={this.onExited}
//                     key={item.src}
//                 >
//                     <img src={item.src} alt={item.altText} />
//                     <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
//                 </CarouselItem>
//             );
//         });

//         return (
//             <Carousel
//                 activeIndex={activeIndex}
//                 next={this.next}
//                 previous={this.previous}
//             >
//                 <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
//                 {slides}
//                 <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
//                 <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
//             </Carousel>
//         );
//     }
// }

