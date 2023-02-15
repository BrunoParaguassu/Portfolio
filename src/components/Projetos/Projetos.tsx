import './Projetos.css'

function Projetos() {
  return (
    <>
      <div className='container-fluid'>
        <div className="container-projetos text-center">
          <h1 className='projetos' id='projetos'>Projetos</h1>
          <div className="row">
            <div className="col">
              <h3 className='projeto-integrador'>Projeto - Integrador (Digital House)</h3>
              <p className='p-projetos'>
                Desenvolvido um site E-commerce, com uma
                equipe de 6 colaboradores, usando estrutura MVC,
                Handlebars para as views, Mysql para banco de
                dados relacional, Sequelize para criação das
                models, Bcrypt para criptografar dados sensiveis,
                montado no Express e usando API do (mercado
                pago) para validar os dados de cartão de credito e
                Express-Session, tudo isso sendo usado com a
                metodologia agil Scrum e entregando sprints
                semanais.
              </p>
            </div>
            <div className="col">
              <div id="carousel1" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../../../public/img/img2.jpg" width="500" height="400" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src="../../../public/img/pexels-lukas-574069.webp" width="500" height="400" alt="" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container-projetos text-center">
          <div className="row">
            <div className="col">
              <h3>Projeto - Freelancer (ProperHuman)</h3>
              <p className='p-projetos'>
                Migração de um site com tecnologias como a
                Gulp para o Reactjs, fizemos a parte de migração
                do Sass que estava dando problema e
                reescrevemos em um novo arquivo sass, fizemos o
                build usando Vite para melhorar a performace do
                site e migramos os videos para o Vimeo, tudo isso
                documentado no github
              </p>
            </div>
            <div className="col">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../../../public/img/img2.jpg" width="500" height="400" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src="../../../public/img/pexels-lukas-574069.webp" width="500" height="400" alt="" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container-projetos text-center">
          <div className="row">
            <div className="col">
              <h3>Projeto - Pessoal (Deploy CI/CD Netlify)</h3>
              <p className='p-projetos'>
                Fiz uso do github actions para fazer uma entrega
                continua de um site (Mini projeto Webpack e Sass)
                feito um script configurando o CI/CD na branch
                main, CI na develope e CI/CD na homolog.
              </p>
            </div>
            <div className="col">
              <div id="carousel3" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../../../public/img/01.jpg" width="700" height="300" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src="../../../public/img/02.jpg" width="700" height="300" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src="../../../public/img/03.jpg" width="700" height="300" alt="" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-projetos text-center">
          <div className="row">
            <div className="col">
              <h3>Projeto - Pessoal (Caixa 24hrs)</h3>
              <p className='p-projetos'>
                Projeto criado com modulos NPM, como o chalk usado para dar cores ao projeto, 
                inquirer usado para fornecer a interface do usuário e o fluxo da sessão de consulta, 
                nodemon para reiniciar automaticamente o aplicativo quando são detectadas alterações de arquivo no diretório. e Fs para acessar o sistema de arquivos.
              </p>
            </div>
            <div className="col">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../../../public/img/primeiraimagembancodobrasil.jpg" width="700" height="300" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src="../../../public/img/segundaimagembancodobrasil.jpg" width="700" height="300" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src="../../../public/img/imagem3bancodobrasil.jpg" width="700" height="300" alt="" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projetos