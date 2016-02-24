app.run(($httpBackend) => {
  $httpBackend.whenGET(/\.html$/)
    .passThrough();
  $httpBackend.whenGET('/mail')
    .respond(window.mocks.messages);
  $httpBackend.whenGET('/contacts')
    //   // .respond(404,'');
    .respond(window.mocks.contacts);
  // $httpBackend.whenGET('/contacts/:id')
  //   .respond(function (method, url, data, headers, params) {
  //     return [200, window.mocks.contacts[Number(params.id)]];
  //   });
});

