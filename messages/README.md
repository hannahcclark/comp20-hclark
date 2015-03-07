#Lab 6 - Messages
* I believe all portions have been correctly implemented
* I did not work with anyone else on this assignment
* It took roughly 1.5 hours

##Response for Part 2
The following output resulted when trying to load the file from Heroku:
XMLHttpRequest cannot load http://messagehub.herokuapp.com/messages.json. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://tuftsdev.github.io' is therefore not allowed access.

The reason is because of the same origin policy. This prevents websites interacting with files/resources of other sites in malicious ways. If the interaction were allowed, it would create opportunities for cross-site scripting or the ability to grab user information that a site is not authorized to have, for example.