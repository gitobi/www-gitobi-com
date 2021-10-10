import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import BaseLayout from "../components/templates/base-layout"

import member from "../images/pages/about/member.jpg"

import {
  article,
  section,
  sectionContainer,
  sectionLeft,
  sectionRight,
  sectionHeader,
  sectionImg,
  memberContainer,
  memberLeft,
  memberImg,
  memberRight,
  memberName,
} from "./about.module.scss"

const AboutPage = () => {
  return (
    <BaseLayout>
      <article className={article}>

        <section className={section}>
          <div className={sectionContainer}>
            <div className={sectionLeft}>
              <h1 className={sectionHeader}>ABOUT</h1>
              <p>Gitobiが目指していることや、これまでの歩みのほか、社員、会社概要などを自己紹介します。</p>
            </div>
            <div className={sectionRight}>
              <StaticImage
                imgClassName={sectionImg}
                src="../images/pages/about/about-eyecatch.jpg"
                alt="About eyecatch"
                placeholder="dominantColor"
              />
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={sectionContainer}>
            <div className={sectionLeft}>
              <h2 className={sectionHeader}>VISION</h2>
              <p>目指していること</p>
            </div>
            <div className={sectionRight}>
              <h3>日本のフルーツが、世界中で愛される未来</h3>
              <p>日本のフルーツは、育成に時間がかかること、四季の影響で年に一度しか収穫できないことから、年中収穫可能な南国のフルーツに比べて生産量が限られてしまいます。さらに、その生産したフルーツはほぼ国内で消費されてしまい、世界の人々が日本のフルーツを手に取る機会は多くありません。</p>
              <p>そこでGitobiは、より早く、より多くの実を収穫可能にする「根域制限栽培」という果樹の栽培法に注目しました。</p>
              <p>Gitobiは、この「根域制限栽培」を応用しITと組み合わせることで、日本のフルーツ栽培のコストを下げながら、一年中果実を収穫できる「フルーツ工場」の開設を目指します。そして、日本のフルーツが、世界中の人に親しんでもらえる未来を創ります。</p>
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={sectionContainer}>
            <div className={sectionLeft}>
              <h2 className={sectionHeader}>MISSION</h2>
              <p>何をするのか</p>
            </div>
            <div className={sectionRight}>
              <h3>フルーツ栽培をもっと身近にする</h3>
              <p>梨や桃をはじめとする日本の美味しいフルーツ。しかし、その栽培には、たくさんの時間と労力がかかります。</p>
              <p>日本のフルーツは、実が収穫できるようになるまでに数年の歳月が必要なうえ、四季の影響で年に一度しか収穫できません。さらに、病気にかかったり、ほかの生き物からの食害を受けやすい作物であるため、日当たりや気温、降雨量など、環境に応じてこまめな手入れをしなければならないのです。</p>
              <p>Gitobiは、自然環境や職人の感覚をITの力で計測し、データとして活用可能にすることで、より美味しいフルーツを、より簡単に栽培できるようにします。そして、誰もが手軽にフルーツ栽培を始められる・続けられるようにします。</p>
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={sectionContainer}>
            <div className={sectionLeft}>
              <h2 className={sectionHeader}>STORY</h2>
              <p>これまでの歩み</p>
            </div>
            <div className={sectionRight}>
              <h3>「ITの力で、日本の農業を元気付けたい」</h3>
              <StaticImage
                imgClassName={sectionImg}
                src="../images/pages/about/story-eyecatch.jpg"
                alt="Story eyecatch"
                placeholder="dominantColor"
              />
              <p>エンジニアリング企業であるGitobiが、事業の軸足を「農業」に置くことに決めたのは、2016年のこと。</p>
              <p>きっかけは、創業者の小野寺が何気なく手にした一冊の本でした。そこに書かれていたのは、日本の農業の構造と、その継続発展の妨げとなる課題の数々。これまでさまざまなITサービスを生み出してきたGitobiなら、それらの課題を解決できるかもしれない——。可能性を探るため、農業の勉強を始めた小野寺は、そこで、日本のフルーツ栽培の難しさに直面します。</p>
              <p>「自分は幼い頃から、フルーツ、なかでも日本のフルーツである“梨”に親しんできた。世の中の課題を解決するエンジニアリングの力を、どうせなら自分の好きな物事のために使いたい」</p>
              <p>こうして、大学や農業試験場の力を借りながら研究開発を行い、誕生したのが、Gitobiの「フルーツ工場」事業。日本のフルーツが、より美味しく簡単に栽培できる未来、そしてその先に、世界中の人に愛される未来を思い描いて、このサービスは誕生したのです。</p>
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={sectionContainer}>
            <div className={sectionLeft}>
              <h2 className={sectionHeader}>MEMBER</h2>
              <p>社員紹介</p>
            </div>
            <div className={sectionRight}>

              <div className={memberContainer}>
                <div className={memberLeft}>
                  <StaticImage
                    imgClassName={memberImg}
                    src="../images/pages/about/rui-onodera.jpg"
                    alt="Rui Onodera"
                    placeholder="dominantColor"
                  />
                </div>
                <div className={memberRight}>
                  <h3 className={memberName}>Rui Onodera</h3>
                  <p>代表者。CEO。梨が好きなエンジニア。</p>
                </div>
              </div>

              <div className={memberContainer}>
                <div className={memberLeft}>
                  <img
                    className={memberImg}
                    src={member}
                    alt="Ryo Shibayama"
                  />
                </div>
                <div className={memberRight}>
                  <h3 className={memberName}>Ryo Shibayama</h3>
                  <p>COO。子供が好きなエンジニア。</p>
                </div>
              </div>

              <div className={memberContainer}>
                <div className={memberLeft}>
                  <img
                    className={memberImg}
                    src={member}
                    alt="Hidehiko Miyazaki"
                  />
                </div>
                <div className={memberRight}>
                  <h3 className={memberName}>Hidehiko Miyazaki</h3>
                  <p>広報活動に勤しむエンジニア。</p>
                </div>
              </div>

              <div className={memberContainer}>
                <div className={memberLeft}>
                  <img
                    className={memberImg}
                    src={member}
                    alt="Masayo Ohba"
                  />
                </div>
                <div className={memberRight}>
                  <h3 className={memberName}>Masayo Ohba</h3>
                  <p>フルーツ栽培に勤しむ栽培管理者。</p>
                </div>
              </div>

              <div className={memberContainer}>
                <div className={memberLeft}>
                  <StaticImage
                    imgClassName={memberImg}
                    src="../images/pages/about/takuro-onoda.jpg"
                    alt="Takuro Onoda"
                    placeholder="dominantColor"
                  />
                </div>
                <div className={memberRight}>
                  <h3 className={memberName}>Takuro Onoda</h3>
                  <p>ゲームが好きなリードエンジニア。</p>
                </div>
              </div>

              <div className={memberContainer}>
                <div className={memberLeft}>
                  <img
                    className={memberImg}
                    src={member}
                    alt="Katsuhito Matsushima"
                  />
                </div>
                <div className={memberRight}>
                  <h3 className={memberName}>Katsuhito Matsushima</h3>
                  <p>屋外が好きなエンジニア。</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className={section}>
          <div className={sectionContainer}>
            <div className={sectionLeft}>
              <h2 className={sectionHeader}>INFO</h2>
              <p>会社概要</p>
            </div>
            <div className={sectionRight}>
              <h3>会社名</h3>
              <p>Gitobi 合同会社</p>
              <h3>所在地</h3>
              <p>東京都世田谷区松原3-30-10 双葉屋ビル2F</p>
              <h3>設立日</h3>
              <p>2014年11月10日</p>
              <h3>資本金</h3>
              <p>5,000,000円</p>
              <h3>代表者</h3>
              <p>小野寺 類</p>
              <h3>取引銀行</h3>
              <p>三菱UFJ銀行 下北沢支店</p>
            </div>
          </div>
        </section>

      </article>
    </BaseLayout>
  )
}

export default AboutPage
