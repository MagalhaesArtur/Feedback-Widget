import { Widget } from "./components/WidgetButton";

export function App() {
  return (
    <div>
      <div className="flex w-[100vw] h-[100vh]  m-auto justify-center items-center ">
        <div className="border-2 bg-zinc-900 border-pinkzin-500 shadow-personalized w-[700px] flex-col h-[400px] rounded-md flex justify-between p-4 items-center">
          <header className="text-4xl text-center  text-lime-200">
            Widget Form
          </header>
          <div className="text-center text-lg">
            Esta é uma aplicação que cria a possibilide do usuário poder enviar
            feedbacks e relatos de bugs, além de também tornar possível o envio
            de ideias novas para o site.
          </div>
          <footer className="text-center">
            Clique no botão localizado no canto inferior direito para enviar um
            feedback.
          </footer>
        </div>
      </div>
      <Widget />
    </div>
  );
}
