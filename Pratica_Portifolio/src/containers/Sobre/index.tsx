import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis vero
      inventore, quaerat necessitatibus repudiandae ex? Eligendi in impedit,
      illo recusandae distinctio, enim commodi delectus harum tempore suscipit
      dolor nemo nam?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Xmaloe&theme=holi&show_icons=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Xmaloe&layout=compact" />
    </GithubSecao>
  </section>
)

export default Sobre
