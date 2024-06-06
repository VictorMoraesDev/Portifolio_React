import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, Botaotema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
    <Avatar />
    <Titulo fontSize={18}>Victor Moraes</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>
      VictorMoraesDev
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <Botaotema>Trocar tema</Botaotema>
    </SidebarContainer>
  </aside>
)


export default Sidebar
