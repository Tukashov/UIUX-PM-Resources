import '../styles/_UIUX.scss';
import ContentAccardion from '../components/ContentAccardion/ContentAccardion';

function Home() {
    return (
        <>
            <div className='UIUX-All-Blocks'>
                <div className='container'>
                    <h1 className='UIUX-All-Blocks__Title'>Графика пользовательского интерфейса</h1>
                    <p className='UIUX-All-Blocks__Desc'>Веб-сайты и ресурсы с современными компонентами пользовательского интерфейса в различных форматах, таких как PSD, Sketch, Figma и т. д. Они отлично подходят для идей для веб-компонентов/интерфейса пользователя.👇</p>

                    <div className='UIUX-All-Blocks__Item'>
                        <ContentAccardion
                            title="UI Design Daily"
                            content="Удивительные компоненты пользовательского интерфейса всех типов"
                            link="https://www.uidesigndaily.com/"
                            linktext="uidesigndaily.com"
                        />

                        <ContentAccardion
                            title="100 Daily UI"
                            content="Бесплатная библиотека продуктов, элементов и экранов Figma"
                            link="https://100dailyui.webflow.io/"
                            linktext="100dailyui.webflow.io"
                        />

                        <ContentAccardion
                            title="Sketch App Sources"
                            content="Эскизные интерфейсы, каркасы, значки и многое другое"
                            link="https://www.sketchappsources.com/"
                            linktext="www.sketchappsources.com"
                        />

                        <ContentAccardion
                            title="Humaaans"
                            content="Крутые иллюстрации людей, умеющих смешивать и сочетать"
                            link="https://www.humaaans.com/"
                            linktext="www.humaaans.com"
                        />

                        <ContentAccardion
                            title="Paaatterns"
                            content="Бесплатная коллекция красивых узоров для всех векторных форматов"
                            link="https://products.ls.graphics/paaatterns/"
                            linktext="products.ls.graphics"
                        />

                        <ContentAccardion
                            title="Thepatternlibrary"
                            content="Бесплатные красивые фоновые узоры"
                            link="http://thepatternlibrary.com/"
                            linktext="thepatternlibrary.com"
                        />

                        <ContentAccardion
                            title="404 illustration"
                            content="Бесплатные иллюстрации для 404 страницы"
                            link="https://error404.fun/"
                            linktext="error404.fun"
                        />

                        <ContentAccardion
                            title="Drawkit  Io"
                            content="Иллюстрации для дизайнеров и стартапов"
                            link="https://drawkit.com/"
                            linktext="drawkit.com"
                        />

                        <ContentAccardion
                            title="Undraw"
                            content="Иллюстрации для любой идеи, которую вы можете вообразить и воплотить"
                            link="https://undraw.co/"
                            linktext="undraw.co"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;