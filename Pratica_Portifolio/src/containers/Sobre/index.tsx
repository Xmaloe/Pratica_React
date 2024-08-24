import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Desenvolvimento Full Stack Python em formação pela EBAC – Escola Britânica
      de Artes Criativas e Tecnologia e graduando 7º semestre em Ciências
      Econômicas pela Universidade Nove de Julho. Meus colegas costumam me
      descrever como criativa, motivada e proativa quando enfrento desafios.
      Estou em busca de novas oportunidades que me permitam crescer
      profissionalmente, aplicar meus conhecimentos e contribuir para o
      desenvolvimento de soluções tecnológicas inovadoras. Se você estiver
      interessado em discutir possíveis colaborações, fique à vontade para
      entrar em contato comigo.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Xmaloe&theme=holi&show_icons=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Xmaloe&layout=compact" />
    </GithubSecao>
  </section>
)

export default Sobre
