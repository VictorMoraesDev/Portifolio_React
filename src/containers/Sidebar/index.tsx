import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, Botaotema, SidebarContainer } from './styles'

type Props = {
  TrocaTema: () => void;
}

const Sidebar = (props: Props) => (
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
      <Botaotema onClick={props.TrocaTema}>Trocar tema</Botaotema>
    </SidebarContainer>
  </aside>
)


export default Sidebar
