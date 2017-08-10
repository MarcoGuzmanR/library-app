# library-app

This is the single repo for both tests.

Technologies used:

* Back end:
  * Node (v7.10 >) and Express

* Front end:
  * AngularJS 1.6.5
  * Bootstrap 3.3.7
  * UI Bootstrap 2.5.0
  * SASS

You just need to clone the repo and run:

```bash
$ npm install
$ grunt
```
### Notes

The library public site is under the root address and the admin site is under
/admin

As you can see in the public site, I suck at designing.

The data for books and categories are hard coded. Despite is this data is not
persisted, you are able to add, edit, or remove books but if you restart the
server, this data will be reloaded again as it was at the beginning.

I know this can be improved in many ways as having MongoDB or another DB to
persist the data and more enhancements also in the structure of the app.
