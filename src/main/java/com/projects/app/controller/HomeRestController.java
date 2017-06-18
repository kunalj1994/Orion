package com.projects.app.controller;

import com.projects.app.model.Description;
import com.projects.app.model.Experience;
import com.projects.app.model.MyInfo;
import com.projects.app.services.ResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by kjaiswa3 on 4/15/2017.
 */
@RestController
public class HomeRestController {

  @Autowired
  private ResumeService service;

  @RequestMapping("/getInfo")
  public MyInfo info(){
    return new MyInfo();
  }

  @RequestMapping("/getExperiences")
  public List<Experience> getExperience(){
    return service.retriveExperiences();
  }

  @RequestMapping("/getDescriptions")
  public List<Description> getDescription(){
    return service.retrieveDescriptions();
  }
}
