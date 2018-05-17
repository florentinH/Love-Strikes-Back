const navBarhtml = () => `<nav class="navbar navbar-expand-sm bg-custom">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav ml-auto">
            <div class="navbar-nav">
              <button type="button" class="btn btn-nav" data-toggle="modal" data-target="#signInModal">Se connecter</button>
              <!-- Modal -->
              <div class="modal fade" id="signInModal" tabindex="-1" role="dialog" aria-labelledby="signInModal" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="signInModal">Se connecter</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form id="form-account" method="POST" action="/sign-in">
                       <div class="form-group row">
                           <label for="identifiant" class="col-sm-4 col-form-label">Pseudo:</label>
                           <div class="col-sm-6">
                               <input type="text" class="form-control" id="pseudo" name="pseudo">
                           </div>
                       </div>
                       <div class="form-group row">
                           <label for="mdp" class="col-sm-4 col-form-label">Mot de passe :</label>
                           <div class="col-sm-6">
                               <input type="text" class="form-control" id="password" name="password">
                           </div>
                       </div>
                    </div>
                  </form>
                    <div class="modal-footer">
                        <input form="form-account" type="submit" class="btn btn-primary" value="Valider">
                    </div>
                  </div>
                </div>
              </div>



              <button type="button" class="btn btn-nav" data-toggle="modal" data-target="#signUpModal">S'inscrire </button>
              <!-- Modal -->
              <div class="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="signUpModal" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="signUpModal">S'inscrire</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form id="form-account" method="POST" action="/sign-up">
                       <div class="form-group row">
                           <label for="identifiant" class="col-sm-4 col-form-label">Pseudo:</label>
                           <div class="col-sm-6">
                               <input type="text" class="form-control" id="pseudo" name="pseudo">
                           </div>
                       </div>
                       <div class="form-group row">
                           <label for="mdp" class="col-sm-4 col-form-label">Mot de passe :</label>
                           <div class="col-sm-6">
                               <input type="text" class="form-control" id="password" name="password">
                           </div>
                       </div>
                       <div class="form-group row">
                           <label for="email" class="col-sm-4 col-form-label">Genre : </label>
                           <div class="col-sm-6">
                             <select id="gender" name="gender" class="form-control">
                              <option value="1">Femme</option>
                              <option value="2" selected>Homme</option>
                              <option value="3">Hermaphrodite</option>
                            </select>
                           </div>
                       </div>
                    </div>
                  </form>
                    <div class="modal-footer">
                        <input form="form-account" type="submit" class="btn btn-primary" value="Valider">
                    </div>
                  </div>
                </div>
              </div>
            </ul>
      </div>
  </nav>`

  module.exports=navBarhtml
