package com.projects.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by kjaiswa3 on 4/15/2017.
 */

@Controller
public class HomeController {

  @RequestMapping("/")
  public String index(){
    return "index.html";
  }
}
