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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;