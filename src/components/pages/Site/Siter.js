import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonCus from "../../ButtonCus";
import ButtonGroupShare from "../../ButtonGroupShare";
import styles from "./Site.module.scss";

const cx = classNames.bind(styles);
const SitePage = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("index-base")}>
        <div className={cx("logo")}>
          <Image
            src={"https://s1.bunnycdn.ru/assets/sites/flixtor/logo.png"}
            alt="logo"
            width={65}
            height={65}
          />
        </div>
        <h3 className={cx("title")}>FlixTor</h3>
        <Link to="/home/movies" className={cx("btn-link")}>
          <ButtonCus style={{ margin: "15px 0 45px" }}>
            View Full Site <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </ButtonCus>
        </Link>
        <div className={cx("button-group-shares")}>
          <ButtonGroupShare />
        </div>
        <div className={cx("heade-title")}>
          Fun! Watch Movies & TV Shows Online for FREE on FlixTor
        </div>
        <div className={cx("content-title")}>
          Do you love movies and tv series? Do you want to watch them for free
          online, but don't know how? Well, look no further. FlixTor is a
          website that allows users to watch tv series and movies for free on
          their computers, laptops, tablets or smartphones.
        </div>
        <div className={cx("content-title")}>
          All the tv series and films are available in English which makes it
          easier for everyone around the world to enjoy. The best part about
          this site is that there's no sign up required! It doesn't matter if
          you're a kid or an adult – just go there, start watching tv shows and
          films without any form of payment whatsoever!
        </div>
        <div className={cx("heade-title")}>What is FlixTor?</div>
        <div className={cx("content-title")}>
          FlixTor is an online website that allows users to watch tv series and
          movies for free on their computers, laptops, tablets or smartphones.
          The site doesn't require any form of registration which means you
          don't need an account in order to start watching! You can find all
          genres there – from romantic comedies to horror films - so everyone's
          happy!
        </div>
        <div className={cx("content-title")}>
          Currently, the site has over thousands movies and tv series online for
          free. Just find a film or show you enjoy watching and start enjoying
          it as much as you want! No sign up required – just go there, pick what
          you like to watch and press play. That's why FlixTor is one of the
          leading websites when it comes to online streaming.
        </div>
        <div className={cx("content-title")}>
          The website is available in English which makes it easier for people
          from all over the world to access and watch their favourite films and
          tv series. You don't need to be a genius when it comes to using
          computers or other devices – FlixTor is easy to use and anyone can do
          it!
        </div>
        <div className={cx("content-title")}>
          What's more, FlixTor constantly updates their database with new movies
          and tv series. The site has everything you need in order to have a
          good time when it comes to entertainment – all genres are available
          there!
        </div>
        <div className={cx("heade-title")}>FREE to Use</div>
        <div className={cx("content-title")}>
          FlixTor is a free movies and tv series streaming website. It doesn't
          matter if you're looking for comedies, dramas, or even animated films
          – FlixTor has it all! The site offers thousands of titles that are
          available to watch through your computer, laptop, tablet, or
          smartphone without having to pay any fee whatsoever.
        </div>
        <div className={cx("heade-title")}>
          Best for Movies and TV Series Lovers
        </div>
        <div className={cx("content-title")}>
          Do you enjoy watching movies and tv series online? If yes, then
          FlixTor is perfect for you! The site has a wide range of titles that
          are all free to watch. There's no need to sign up or pay money – just
          go there, pick what you want and start enjoying it as much as
          possible!
        </div>
        <div className={cx("heade-title")}>Easy to Use</div>
        <div className={cx("content-title")}>
          FlixTor is an easy to use website when it comes to streaming movies
          and tv series. You don't need any prior knowledge in order to navigate
          through the site – FlixTor is simple and anyone can do it! The website
          offers a user-friendly interface that makes watching your favourite
          films and shows easier than ever.
        </div>
        <div className={cx("heade-title")}>No Disturbing Ads</div>
        <div className={cx("content-title")}>
          You don't have to worry about disturbing ads while streaming on
          FlixTor. The site is free of any adverts that could interrupt your
          film or tv show experience!
        </div>
        <div className={cx("content-title")}>
          FlixTor has all genres covered – romantic comedies, dramas, animated
          films, horror movies and so much more are available there for you to
          enjoy as many times as you want! The site is constantly updated with
          new titles, so you'll never get bored. Thousands of movies and tv
          series for free? Yes please! Go to FlixTor now and start watching!
        </div>
        <div className={cx("heade-title")}>Safe and Secure</div>
        <div className={cx("content-title")}>
          Do you have any concerns about your privacy online? There's no need to
          worry when it comes to browsing on FlixTor. The site is 100% safe and
          secure! Everything that happens there couldn't be traced back to your
          name or email address – everything stays hidden for maximum protection
          provided by the website itself.
        </div>
        <div className={cx("heade-title")}>The Best Movies Website of 2022</div>
        <div className={cx("content-title")}>
          FlixTor is the best website when it comes to watching movies and tv
          series for free! The site has thousands of titles available, all
          featuring good quality audios and videos. There's no need to sign up
          or pay money – just go there, pick what you want and enjoy your time
          as much as possible! FlixTor is simple, easy to use and anyone can do
          it!
        </div>
        <div className={cx("heade-title")}>Is FlixTor safe?</div>
        <div className={cx("content-title")}>
          Yes it is. The website has the best privacy policy in the whole
          entertainment niche which means that your every move there couldn't be
          traced back to you or your name/email address. No sign ups are
          required when using this site so everyone feels comfortable using it.
        </div>
        <div className={cx("heade-title")}>What Are the Competitors?</div>
        <div className={cx("content-title")}>
          The top competitors of FlixTor are websites such as 123movies,
          GoMovies, PrimeWire and Popcorn Time. All these websites offer a great
          selection of movies and tv series to their users but what separates
          FlixTor from the rest is that it offers all its content for free
          without any need to sign up or pay. The top movies and tv series are
          all available on FlixTor which makes it a better option than any other
          website.
        </div>
        <div className={cx("heade-title")}>Best Features</div>
        <div className={cx("content-title")}>
          FlixTor offers many features that make watching your favourite movies
          and tv series online even easier than before. There's no need to sign
          up or pay money when using this site – just go there, pick what you
          want and enjoy!
        </div>
        <div className={cx("content-title")}>
          The website has an easy to use interface which makes navigating
          through it highly simple so anyone can do it without having any prior
          knowledge. The website is also ad-free which means that you don't have
          to worry about any disturbing ads while streaming your favourite films
          and tv series.
        </div>
        <div className={cx("content-title")}>
          Lastly, FlixTor offers a wide range of genres so everyone can find
          something they'll enjoy watching!
        </div>
        <div className={cx("heade-title")}>Premium Quality Resolution</div>
        <div className={cx("content-title")}>
          FlixTor offers the best quality resolution when streaming movies and
          tv series. The site has all genres covered so everyone can find
          something they'll enjoy watching without any problems. Thousands of
          titles are available on FlixTor which makes it one of the best
          websites when it comes to online movie and tv series streaming.
        </div>
        <div className={cx("heade-title")}>What's New?</div>
        <div className={cx("content-title")}>
          FlixTor is constantly updated with new titles so you'll never get
          bored! The site also has an easy to use interface which makes it
          accessible for all types of users. There's no need to sign up or pay
          money when using FlixTor – just go there, pick what you want and enjoy
          your time as much as possible!
        </div>
        <div className={cx("btn-link-footer")}>
          <Link to={"/home/movies"}>
            <ButtonCus>
              Go to flixtor.video{" "}
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </ButtonCus>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SitePage;
