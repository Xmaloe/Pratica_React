import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={12}>Karen Aprigio Moraes</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Xmaloe
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheira Full Stack E-mail: karenmoraes222@gmail.com Visite meu
        GitHub: https://github.com/Xmaloe
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
