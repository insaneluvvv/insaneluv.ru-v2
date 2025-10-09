import Logofolio from "./../media/projects/logofolio.png";
import Kandinsky from "./../media/projects/kandinsky.jpg";
import StudJob from "./../media/projects/studjob.png";
import crw from "./../media/projects/crw.png";
import tournaments from "./../media/projects/tournaments.png";
import linguaflow from "./../media/projects/linguaflow.png";




type ProjectInt = {
  id: number,
  tag: string[],
  name: string,
  desc: string,
  img: string,
  link: string,
}

const initProject: Array<ProjectInt> = [
  {
    id: 1,
    tag: ["Графический дизайн", "Логотипы"],
    name: "Логофолио",
    desc: "Коллекция созданных логотипов.",
    img: Logofolio,
    link: "logofolio",
  },
  {
    id: 2,
    tag: ["UI/UX", "Интерфейс", "Многостраничник"],
    name: "Сервис для обучения Kandinsky",
    desc: "Интерфейс сервиса для разметки данных.",
    img: Kandinsky,
    link: "kandinsky",
  },
  {
    id: 3,
    tag: ["UI/UX", "Интерфейс", "Многостраничник", "Пет-проект"],
    name: "Поиск вакансий для студентов",
    desc: "Интерфейс сервиса поиска вакансий для студентов.",
    img: StudJob,
    link: "studjob",
  },
  {
    id: 4,
    tag: ["Графический дизайн", "Презентация", "Пет-проект"],
    name: "Презентация LinguaFlow",
    desc: "Информационная презентация услуг онлайн-платформы для изучения иностранных языков.",
    img: linguaflow,
    link: "linguaflow",
  },
  {
    id: 5,
    tag: ["Графический дизайн", "Презентация"],
    name: "Курсовая научно исследовательская работа",
    desc: "Презентация для выступления.",
    img: crw,
    link: "course-research-work",
  },
  {
    id: 6,
    tag: ["Графический дизайн", "Турниры", "Таблицы", "Сетки", "Ростеры"],
    name: "Турниры",
    desc: "Работы связанные с турнирами.",
    img: tournaments,
    link: "tournaments",
  },
  // {
  //   id: 6,
  //   tag: ["Графический дизайн", "Турнир"],
  //   name: "Турнирные таблицы",
  //   desc: "Коллекция турнирных таблиц.",
  //   img: test,
  //   link: "test",
  // },
]

export default initProject;