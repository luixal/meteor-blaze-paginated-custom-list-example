# meteor-blaze-paginated-custom-list-examples
This repo contains three basic examples using [`luixal:blaze-paginated-custom-list`](https://github.com/luixal/meteor-blaze-paginated-custom-list) meteor package for rendering item lists.

For running each of them you just have to go into the example directory you want to run, in example:

    cd example-1

and run the meteor project:

    meteor

And that's it.

Here are some screenshots of the rendered lists in the examples:

## Examples

These examples use differente bootstrap themes from [bootswatch](http://bootswatch.com/). You can find them already packaged for Meteor in [Atmosphere](https://atmospherejs.com/).

You can find the code for this examples [here](https://github.com/luixal/meteor-blaze-paginated-custom-list-example)

#### Example 1
Using bootswatch's theme [Sandstone](http://bootswatch.com/sandstone/) and this item template:

```html
<template name="book">
  <div class="panel panel-default">
    <div class="panel-body">
      "{{title}}" by {{author}} ({{points}} points)
    </div>
  </div>
</template>
```

and this options:

```javascript
{
  template: 'book',
  collection: Books,
  paginationOptions: {
    perPage: 5,
    sort: {
      title: -1
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
```

looks like this:

![example_1_screenshot](https://github.com/luixal/meteor-blaze-paginated-custom-list-example/raw/master/screenshots/example_1.png)

#### Example 2
Using bootswatch's theme [Superhero](http://bootswatch.com/superhero/) and this item template:

```html
<template name="book">
  <div class="panel panel-success">
    <div class="panel-body">
      <strong class="text-uppercase">"{{title}}"</strong> by <span class="text-success">{{author}}</span> <span class="pull-right text-danger"><strong>{{points}}</strong></span>
    </div>
  </div>
</template>
```

and this options:

```javascript
{
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
```

looks like this:

![example_2_screenshot](https://github.com/luixal/meteor-blaze-paginated-custom-list-example/raw/master/screenshots/example_2.png)

#### Example 3
Using bootswatch's theme [Simplex](http://bootswatch.com/simplex/) and this item template:

```html
<template name="book">
  <strong class="text-uppercase">"{{title}}"</strong> by <span class="text-success">{{author}}</span>
  <div class="pull-right">
    <a href="#" class="btn btn-xs btn-danger"><i class="fa fa-pencil" aria-hidden="true"></i></a>
    <a href="#" class="btn btn-xs btn-primary"><i class="fa fa-times" aria-hidden="true"></i></a>
  </div>
</template>
```

and this options:

```javascript
{
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
```

looks like this:

![example_3_screenshot](https://github.com/luixal/meteor-blaze-paginated-custom-list-example/raw/master/screenshots/example_3.png)
