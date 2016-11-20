import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var showMoreIncrement = 5;

Template.booksList.helpers({
  'options': function() {
    return {
      template: 'book',
      collection: Books,
      paginationOptions: {
        perPage: 5,
        sort: {
          title: -1
        }
      },
      paginatorOptions: {
        hide: true
      },
      onItemClick: function(item) {
        console.log(item);
      }
    }
  },

  'showingPerPage': function() {
    if (PaginatedCustomList && PaginatedCustomList.getPagination('books')) return PaginatedCustomList.getPagination('books').perPage();
  },

  'totalItems': function() {
    if (PaginatedCustomList && PaginatedCustomList.getPagination('books')) return PaginatedCustomList.getPagination('books').totalItems();
  },

  'allShown': function() {
    let pagination = PaginatedCustomList.getPagination('books');
    if (pagination) return (pagination.perPage() >= pagination.totalItems());
  }
});

Template.booksList.events({
  'click #showMore': function() {
    let pagination = PaginatedCustomList.getPagination('books');
    pagination.perPage(pagination.perPage() + showMoreIncrement);
  }
});
