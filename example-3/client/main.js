import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.booksList.helpers({
  'options': function() {
    return {
      template: 'book',
      collection: Books,
      ulClasses: 'list-group',
      liClasses: 'list-group-item',
      paginationOptions: {
        perPage: 5,
        sort: {
          name: -1
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
