import Navbar from './components/Navbar';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar /> {/* 메뉴바 추가 */}

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.profile}>
            <Image
              className={styles.logo}
              src="/your-logo.png" // 본인의 로고 이미지로 변경
              alt="Your Logo"
              width={200}
              height={200}
            />
            <div className={styles.info}>
              <h2>Junseo Yun</h2>
              <p>B.S., in Mathematics, UC San Diego</p>
              <p>La Jolla, California</p>
              <div className={styles.ctas}>
                <a
                  href="junseoyun0822@gmail.com" // 본인의 이메일 주소로 변경
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/email.png" // 이메일 아이콘 이미지 경로 (필요하면 추가)
                    alt="Email logo"
                    width={20}
                    height={20}
                  />
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/junseo-yun-71b70a333/" // 본인의 LinkedIn 링크로 변경
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/linkedin.png" // LinkedIn 로고 이미지 경로
                    alt="LinkedIn logo"
                    width={20}
                    height={20}
                  />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/JunseoYun142857" // 본인의 GitHub 링크로 변경
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/github.png" // GitHub 로고 이미지 경로
                    alt="GitHub logo"
                    width={20}
                    height={20}
                  />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.about}>
          <h2>About Me</h2>
          <p>    
          Hi! My name is Junseo Yun, a freshman studying Mathematics at UC San Diego.
          I was born in Icheon, South Korea, and lived in Namyangju, South Korea until fifth grade. 
          In October 2nd, 2016, I moved to Hefei, China, where I completed my high school. 
          Now, I am excited to be here in San Diego, California. I am planning to join R.O.K.A. in 2025.
          </p>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 Junseo Yun</p>
      </footer>
    </div>
  );
}
