
import {Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script';
import React from "react";


export default function Document() {
	return (
		<Html lang="en">
			
<Head>

    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
    <title>Dylan Marsili</title>
       <meta name="description" content="Dylan Marsili - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AL/ML, and Design. Join my journey." />

    {/*These are need for PWA*/}
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="Dylan Marsili" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
    <meta name="msapplication-tap-highlight" content="no" />

            <meta name="theme-color" content="#000000" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="language" content="English"/>
            <meta name="revisit-after" content="1 days"/>
            <link rel="canonical" href="https://dylanmarsili.is-a.dev/" />
            <meta name="license" content="MIT License" />
            <meta httpEquiv="content-language" content="en-us" />

            <link rel="preconnect" href="https://dylanmarsili.is-a.dev/" />

            <link rel="dns-prefetch" href="https://dylanmarsili.is-a.dev/" />

            <meta name="author" content="Dylan Marsili" />

            <link rel="alternate" hrefLang="en" href="https://dylanmarsili.is-a.dev/" />

            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />

            <link rel="apple-touch-icon" href="/img/logo_rounded.png" />

            <link rel="apple-touch-icon" sizes="180x180" href="/img/logo_rounded.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.jpg" />
             <link rel="icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>
            <link rel="shortcut icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>

             <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="manifest" href="/manifest.json" />





            <meta property="og:title" content="Dylan Marsili" key="title" />
            <meta property="og:description" content="Dylan Marsili - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey." />
            <meta property="og:image" content="" />
            <meta property="og:image:secure_url" content="" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:alt" content="Dylan Marsili" />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="300" />
            <meta property="og:url" content="https://dylanmarsili.is-a.dev/" />
            <meta property="og:type" content="website" />
            <meta property="og:profile" content="https://github.com/muhammad-fiaz" />
            <meta property="og:site_name" content="Dylan Marsili" />
             <meta property="og:locale" content="en_US" />


            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="https://twitter.com/muhammadfiaz_" />
            <meta name="twitter:title" content="Dylan Marsili" />
            <meta name="twitter:description" content="Dylan Marsili - A dedicated Full Stack Developer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey." />
            <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/75434191?v=4" />
            <meta name="twitter:creator" content="https://twitter.com/muhammadfiaz_" />
            <meta name="twitter:domain" content="https://dylanmarsili.is-a.dev/" />


    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='2048x2732' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1668x2224' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1536x2048' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1125x2436' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1242x2208' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='750x1334' />
    <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='640x1136' />

            {/*These are the Keywords that will Boost your SEO in Ranking, so Make Sure to include and Update it up to your preference or don't mind this! 😴*/}
            <meta name="keywords" content="
    Dylan Marsili, Full Stack Engineer, Full Stack Developer, DevOps Engineer, Software Engineer,
    Programmer, Software Developer, Portfolio Website, Web Developer, Coding, Full Stack Development,
    Technology Enthusiast, Software Development, Computer Science, Programming Projects,
    Frontend Developer, Backend Developer, Software Development Portfolio, Student,
    Full Stack Web Developer, Dylan Marsili Portfolio, Coding Projects, Tech Portfolio,
    Web Development, DevOps Professional, Dylan Marsili Projects, Software Engineer Portfolio,
    IT Professional, Technology Projects, Software Development Engineer, Computer Programmer,
    Code Portfolio, Technology Student, Software Architect, Cloud Computing,
    DevOps Specialist, Software Engineering Projects, Coding Portfolio,
    Full Stack Engineer Portfolio, Dylan Marsili Web Developer,
    Software Development Student, Coding Enthusiast, DevOps Portfolio, Programming Portfolio,
    Dylan Marsili DevOps, IT Portfolio, Web Developer Portfolio, Dylan Marsili Developer,
    Full Stack Engineer Dylan Marsili, Dylan Marsili Coding, Dylan Marsili IT,
    Dylan Marsili Full Stack Developer, Dylan Marsili Software Engineer, Dylan Marsili DevOps Engineer,
    Dylan Marsili Programming, Dylan Marsili Software Development, Dylan Marsili Coding Projects,
    Dylan Marsili Tech Portfolio, Dylan Marsili IT Portfolio, Dylan Marsili Software Engineer Portfolio,
    Dylan Marsili Web Developer Portfolio, Dylan Marsili DevOps Portfolio, Dylan Marsili Full Stack Engineer,
    Dylan Marsili Full Stack Developer Portfolio, Dylan Marsili Coding Portfolio, Dylan Marsili Programming Portfolio,
    Dylan Marsili Software Development Portfolio, Dylan Marsili Technology Projects,
    Dylan Marsili Computer Science, Dylan Marsili Cloud Computing, Dylan Marsili IT Professional,
    Dylan Marsili Technology Enthusiast, Dylan Marsili Computer Programmer, Dylan Marsili Code Portfolio,
    Dylan Marsili Technology Student, Dylan Marsili Software Architect,fiaz,fiaz portfolio,fiaz devops,fiaz devops engineer,
    fiaz devops portfolio,fiaz devops projects,fiaz devops specialist,fiaz devops professional,fiaz devops engineer portfolio,
    fiaz devops engineer projects,fiaz devops engineer specialist,fiaz devops engineer professional,fiaz devops engineer coding,
    fiaz devops engineer coding projects,fiaz devops engineer coding portfolio,fiaz devops engineer coding specialist,
    Open Source Contributor,open source,open source projects,open source portfolio,open source contributions,
    open source contributions portfolio,open source contributions projects,open source contributions coding,
    open source contributions coding projects,open source contributions coding portfolio,open source contributions coding specialist,
    open source contributions coding professional,open source contributions coding engineer,open source contributions coding developer,
    open source contributions coding student,open source contributions coding enthusiast,open source contributions coding architect,
    open source contributions coding projects portfolio,open source contributions coding projects specialist,

" />


            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dylan Marsili",
          "url": "https://dylanmarsili.is-a.dev/",
          "sameAs": [
            "https://github.com/dylan-marsili",
            "https://www.linkedin.com/in/dylan-marsili-94a693265/",
          ]
        }`
                }}
            />


            {/*Edit this to your according FAQ */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Have you worked on any projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, in addition to my personal projects and hobbies, I have worked on several projects, both individually and in teams. These projects have allowed me to apply theoretical knowledge to real-world scenarios, honing my practical skills in software development, web technologies, and computer networks."
                }
              },
              {
                "@type": "Question",
                "name": "Can we recruit you?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I am currently looking for jobs and I have also done several open-source projects as well."
                }
              },
              {
                "@type": "Question",
                "name": "Who is Dylan Marsili?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dylan Marsili is a Full Stack Developer specializing in Cloud, DevOps, ML/AI, and Design. He is passionate about programming, innovation, and shaping the future. With expertise in various technologies and a strong background in software development, Dylan Marsili strives to create innovative solutions and contribute to the advancement of technology. His skill set includes proficiency in cloud computing, DevOps practices, machine learning/artificial intelligence, and design principles. Dylan Marsili is dedicated to staying up-to-date with the latest industry trends and leveraging his knowledge to drive impactful and transformative projects."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Dylan Marsili from?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dylan Marsili is from Argentina, Buenos Aires."
                }
              },
              {
                "@type": "Question",
                "name": "What does Dylan Marsili do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dylan Marsili leverages Cloud, DevOps, ML/AI, Design, and web/mobile apps to benefit people with optimized operations and user-friendly experiences."
                }
              }
            ]
          }
        `,
            }} />

            {/*Edit this to your according to your website*/}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: `
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://dylanmarsili.is-a.dev/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Docs",
              "item": "https://dylanmarsili.is-a.dev/docs"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "Articles",
              "item": "https://dylanmarsili.is-a.dev/articles"
            },{
              "@type": "ListItem",
              "position": 4,
              "name": "Projects",
              "item": "https://dylanmarsili.is-a.dev/projects"
            },{
              "@type": "ListItem",
              "position": 5,
              "name": "Sign In",
              "item": "https://dylanmarsili.is-a.dev/signin"
            }]
          }
        `
            }} />

            {/*Edit this to your according to your website*/}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: `
          {
            "@context": "https://schema.org",
            "@type": "ResearchProject",
            "name": "Effects",
            "description": "Effects is a collection of various HTML, CSS and JS effects.",
            "alternateName": "Effects",
            "url": "https://github.com/dylan-marsili/effects",
            "logo": "",
             "sameAs": [
            "https://www.linkedin.com/in/dylan-marsili-94a693265/"
        ]          }
        `
            }} />
	{/*theme*/}
	<Script id="theme.util.jsx" strategy="beforeInteractive" >
		{`
				let themeLocalStorage = localStorage.getItem('theme')
				let themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
				`}
	</Script>

    {/* Google Analytics */}
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-SDJ0K1Y70X"/>
    <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SDJ0K1Y70X', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
</Head>

			<body>
			<Main />
			<NextScript />
			</body>
		</Html>
	)
}
