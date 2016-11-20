import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.booksList.helpers({
  'options': function() {
    return {
      template: 'book',
      collection: Books,
      paginationOptions: {
        perPage: 5,
        sort: {
          points: -1
        }
      },
      paginatorOptions: {
        limit: 4,
        containerClass: 'pull-right'
      },
      onItemClick: function(item) {
        console.log(item);
      }
    }
  }
});
