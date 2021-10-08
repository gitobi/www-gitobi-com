import React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import BaseLayout from "../components/templates/base-layout"

import {
  mainVisual,
  mainVisualImg,
  mainText,
  article,
  section,
  sectionHeader,
  sectionContainer,
  sectionLeft,
  sectionRight,
  sectionImg,
  sectionLink,
  topic,
} from "./index.module.scss"

const IndexPage = () => {
  return (
    <BaseLayout>
      <section className={mainVisual}>
        <StaticImage
          className={mainVisualImg}
          src="../images/pages/index/main-visual.jpg"
          alt="Main visual"
          placeholder="blurred"
          objectPosition="80% 100%"
        />
        <p className={mainText}>
          フルーツ栽培を、<br />
          ITの力でもっと身近に。<br />
          日本の美味しさが<br />
          世界で愛される未来へ。
        </p>
      </section>

      <article className={article}>

        <section className={section}>
          <h1 className={sectionHeader}>ABOUT</h1>
          <div className={sectionContainer}>
            <div className={sectionLeft}>
              <p>梨や桃をはじめとする日本の美味しいフルーツ。</p>
              <p>しかし、それら日本のフルーツは、育成期間の長さや病害、食害のリスクを含めた生産コストが高く、また、四季の影響で年に一度しか収穫できない現状があります。</p>
              <p>Gitobiは、自然環境や職人の感覚をITの力で計測し、データとして活用可能にすることで、誰もが手軽にフルーツ栽培を始められる、続けられる未来を創ります。そして、日本のフルーツが、世界中の人々に愛される未来を目指します。</p>
              <Link className={sectionLink} to="/about">Gitobi について</Link>
            </div>
            <div className={sectionRight}>
              <StaticImage
                imgClassName={sectionImg}
                src="../images/pages/index/about-eyecatch.jpg"
                alt="About eyecatch"
                placeholder="blurred"
              />
            </div>
          </div>
        </section>

        <section className={section}>
          <h1 className={sectionHeader}>SERVICES</h1>
          <div className={sectionContainer}>
            <div className={sectionLeft}>
              <p>日本のフルーツ栽培のコストを下げ、効率化を支援する「フルーツ工場」事業を展開。日当たりや水分量などの環境を計測・制御するIoTデバイス「Gitobi Cosmo Devices」の開発と提供、それらのデバイスを使ったオンライン栽培管理システム「からくりファーム」の提供を行っています。</p>
              <Link className={sectionLink} to="/services">製品とサービスを見る</Link>
            </div>
            <div className={sectionRight}>
              <StaticImage
                imgClassName={sectionImg}
                src="../images/pages/index/services-eyecatch.jpg"
                alt="Services eyecatch"
                placeholder="blurred"
              />
            </div>
          </div>
        </section>

        <section className={section}>
          <h1 className={sectionHeader}>TOPICS</h1>
          <p>Gitobiのコーポレートニュース、メディア掲載情報などを発信しています。</p>
          <div className={sectionContainer}>
            <div className={topic}>
              <h2>Topic</h2>
              <p>Topic</p>
            </div>
          </div>
          <Link className={sectionLink} to="/">最新のニュースを見る</Link>
        </section>

        <section className={section}>
          <h1 className={sectionHeader}>CONTACT</h1>
          <p>サービス利用についてや、協業のご相談、農地情報のご提供、採用についてなど、お問い合わせはこちらからお願いします。（Googleフォームが開きます）</p>
          <Link className={sectionLink} to="https://goo.gl/forms/UwYGr6VurI">問い合わせフォームへ</Link>
        </section>

        <section className={section}>
          <h1 className={sectionHeader}>MAIL MAGAZINE</h1>
          <p>サイトの更新情報やGitobiの活動に関するメールマガジンを、不定期にお届けいたします。購読を希望される方はこちらのからお願いします。（Hubspotフォームが開きます）</p>
          <Link className={sectionLink} to="https://share.hsforms.com/1Bfj7ONcPRBK9bkAeEj3ySw2cwg3">購読申し込みフォームへ</Link>
        </section>

      </article>
    </BaseLayout>
  )
}

export default IndexPage
