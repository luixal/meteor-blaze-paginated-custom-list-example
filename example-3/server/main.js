import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // insert defaults books on startup:
  if (Books.find().count() == 0) {
    Books.insert({ title: 'The Great Gatsby ', author: 'F. Scott Fitzgerald', points: 994 });
    Books.insert({ title: 'The Grapes Of Wrath ', author: 'John Steinbeck', points: 963 });
    Books.insert({ title: 'Nineteen Eighty Four ', author: 'George Orwell', points: 946 });
    Books.insert({ title: 'Ulysses ', author: 'James Joyce', points: 925 });
    Books.insert({ title: 'Lolita ', author: 'Vladimir Nabokov', points: 856 });
    Books.insert({ title: 'Catch 22 ', author: 'Joseph Heller', points: 823 });
    Books.insert({ title: 'The Catcher In The Rye ', author: 'J. D. Salinger', points: 735 });
    Books.insert({ title: 'Beloved ', author: 'Toni Morrison', points: 719 });
  }
});
