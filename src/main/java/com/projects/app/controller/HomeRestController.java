package com.projects.app.controller;

import com.projects.app.model.MyInfo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by kjaiswa3 on 4/15/2017.
 */
@RestController
public class HomeRestController {

  @RequestMapping("/getInfo")
  public MyInfo info(){
    return new MyInfo();
  }
}
