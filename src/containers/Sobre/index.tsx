import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";


const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi dolorem inventore hic repellat! Quidem ab earum quia quibusdam a molestiae debitis, fugit eaque beatae autem reprehenderit molestias labore aliquam. Fuga.
    </Paragrafo>
    <GithubSecao>
    <img src="https://github-readme-stats.vercel.app/api?username=VictorMoraesDev&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=VictorMoraesDev&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)

export default Sobre
