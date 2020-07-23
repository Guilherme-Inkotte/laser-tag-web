import React from 'react'

import styles from './styles.module.css'

import imageOne from '../../assets/example.png'
import imageTwo from '../../assets/example2.png'
import imageThree from '../../assets/example3.png'

import { Panel, LoginModal, RegisterModal } from '../'
import { Toggle, Button } from '../utils'

export default function HomeContent() {
  return (
    <>
      <Panel transparent>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeader}>COMEÇE A JOGAR.</h1>
          <div>
            <Toggle render={({ on, toggle }) => (
              <>
                {on && <LoginModal toggleHandler={toggle} />}
                <Button primary width="50%" onClick={toggle}>entrar</Button>
              </>
            )} />
            <Toggle render={({ on, toggle }) => (
              <>
                {on && <RegisterModal toggleHandler={toggle} />}
                <Button width="50%" onClick={toggle}>criar conta</Button>
              </>
            )}

            />

          </div>
        </div>
        <img src={imageOne} alt="imagem" />
      </Panel>
      <Panel>
        <img src={imageTwo} alt="imagem" />
        <section>
          <p>
          O Lasertag Arduino é um jogo competitivo de armas de luz, em que dois times se enfrentam pontuando ao atingir seus inimigos no colete. A tecnologia do Arduino permite que o lasertag seja praticado em qualquer ambiente que tenha um computador.
          </p>
        </section>
      </Panel>
      <Panel>
        <section>
          <p>
          Este projeto final foi criado pelo grupo 5 do terceiro ano turma A. As inspirações para a concepção dele foram os projetos Duino Laser Tag (Instructables) e Tazer Tag (Michael Reeves).
          </p>
        </section>
        <img src={imageThree} alt="imagem" />
      </Panel>
      <Panel>
        <img src={imageOne} alt="imagem" />
        <section>
          <p>
          O colete é uma placa Arduino Uno com sensor LDR, a arma um Arduino Nano com um módulo laser. A comunicação entre as placas e a API em Python acontece por meio do shield Ethernet. Para o site, foi utilizado o ReactJS como framework.
          </p>
        </section>
      </Panel>
    </>
  )
}
