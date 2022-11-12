import React, { Component } from 'react';
import Title from '../components/Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    Services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info:
          'Try a refreshing, non-alcoholic mojito cocktail recipe that skips the usual rum to create a booze-free blend for parties',
      },
      {
        icon: <FaHiking />,
        title: 'endless hiking',
        info:
          'The vast Mono Cliffs Provincial Park includes a section of the Bruce Trail and is home to stunning lookout points.',
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttle',
        info:
          'Heading to Toronto? Book an ExecuCar before you leave so you can avoid the hassle of having to look for transport  ',
      },
      {
        icon: <FaBeer />,
        title: 'strongest beer',
        info:
          'While most of the world’s strongest beers can be found outside of taprooms, they’re often rare and expensive. ',
      },
    ],
  };
  render() {
    return (
      <div>
        <section className="services">
          <Title title="services" />

          <div className="services-center">
            {this.state.Services.map((item, index) => {
              return (
                <article key={index} className="service">
                  <span> {item.icon} </span>
                  <h6>{item.title} </h6>
                  <p> {item.info} </p>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}
