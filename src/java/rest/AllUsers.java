/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import entity.Role;
import facades.UserFacade;
import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author bo
 */
@Path("allusers")
public class AllUsers {

    private static final UserFacade facade = new UserFacade();
    private static Gson gson = new GsonBuilder().setPrettyPrinting().setFieldNamingPolicy(FieldNamingPolicy.IDENTITY).create();
    
    @Context
    private UriInfo context;

    
    public AllUsers() {
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String jUser) {
        
        entity.User user = new entity.User();
        
        JsonObject joUser = new JsonParser().parse(jUser).getAsJsonObject();
        
        user.setUserName(  joUser.get("username").getAsString() );
        user.setPassword(  joUser.get("password").getAsString() );
        
        Role rUser = new Role("User");
//        Role rUser = new Role("Gud");

        user.AddRole(rUser);
        
        System.out.println(user.getUserName());
        System.out.println(user.getPassword());
        System.out.println(user.getRolesAsStrings());
        
        
        user = facade.addUser(user);
        
        
        
        
        //return gson.toJson(user, entity.User.class);
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    
} // End of class
