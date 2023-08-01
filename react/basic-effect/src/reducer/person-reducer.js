export default function PersonReducer(person, action) {
  switch (action.type) {
    case 'updated': {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case 'added': {
      const { newName, newTitle } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: newName, title: newTitle }],
      };
    }
    case 'deleted': {
      const { deleteName } = action;
      return {
        ...person,
        mentors: person.mentors.filter((m) => m.name !== deleteName),
      };
    }
  }
}
