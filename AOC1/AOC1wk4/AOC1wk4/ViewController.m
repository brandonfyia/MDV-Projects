//
//  ViewController.m
//  AOC1wk4
//
//  Created by Brandon Sease on 8/23/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import "ViewController.h"

#define uButt 0
#define dButt 1
#define iButt 2

@interface ViewController ()

@end

@implementation ViewController
//Info Box function

- (NSString*)makeInfoText:(NSString*)firstS secondString:(NSString*)secondS
{
    NSMutableString *muteS = [[NSMutableString alloc]initWithString:firstS];
    [muteS appendString:secondS];
    return muteS;
}


- (void)viewDidLoad
{
    //Background
    self.view.backgroundColor = [UIColor whiteColor];
    
    //Username Lable
    userLab = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 15.0f, 90.0f, 20.0f)];
    if (userLab != nil)
    {
        userLab.text = @"Username: ";
        userLab.textAlignment = UITextAlignmentRight;
        [self.view addSubview:userLab];
    }
    
    //Username Textfield
    userText = [[UITextField alloc] initWithFrame:CGRectMake(100.0f, 10.0f, 210.0f, 30.0f)];
    if (userText != nil)
    {
        userText.borderStyle = UITextBorderStyleRoundedRect;
        [self.view addSubview:userText];
    }
    
    //Username Button
    userButt = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    if (userButt != nil)
    {
        userButt.frame = CGRectMake(230.0f, 50.0f, 80.0f, 30.0f);
        [userButt setTitle:@"Login" forState:UIControlStateNormal];
        [userButt addTarget:self action:@selector(onClick) forControlEvents:UIControlEventTouchUpInside];
        userButt.tag = uButt;
        [self.view addSubview:userButt];
    }
    
    //Info box text
    infoText =@"Please Enter Username";
    
    //Info box
    infoLab = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 100.0f, 320.0f, 80.0f)];
    if (infoLab != nil)
    {
        infoLab.text = infoText;
        infoLab.textColor =[UIColor blueColor];
        infoLab.backgroundColor = [UIColor lightGrayColor];
        infoLab.textAlignment = UITextAlignmentCenter;
        [self.view addSubview:infoLab];
    }
    
    //Date Button
    dateButt = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    if (dateButt != nil)
    {
        dateButt.frame = CGRectMake(10.0f, 200.0f, 100.0f, 30.0f);
        [dateButt setTitle:@"Show Date" forState:UIControlStateNormal];
        [dateButt addTarget:self action:@selector(onClick) forControlEvents:UIControlEventTouchUpInside];
        dateButt.tag = dButt;
        [self.view addSubview:dateButt];
    }
    
    //info Button
    infoButt = [UIButton buttonWithType:UIButtonTypeInfoDark];
    if (infoButt != nil)
    {
        infoButt.frame = CGRectMake(10.0f, 250.0f, 30.0f, 30.0f);
        [infoButt addTarget:self action:@selector(onClick) forControlEvents:UIControlEventTouchUpInside];
        infoButt.tag = dButt;
        [self.view addSubview:infoButt];
    }
    
    //Name Box
    nameLab = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 300.0f, 320.0f, 80.0f)];
    if (nameLab != nil)
    {
        nameLab.textColor =[UIColor orangeColor];
        nameLab.backgroundColor = [UIColor whiteColor];
        nameLab.textAlignment = UITextAlignmentCenter;
        [self.view addSubview:nameLab];
    }
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

//onClick Function
- (void)onClick:(UIButton*)button
{
    if (button.tag == uButt)
    {
        fieldText = [userText text];
        //Username check
        if (fieldText.length < 1)
        {
            infoLab.text = @"Username cannot be empty.";
        } else {
            infoLab.text = @"User: has been logged in.";
        }
    } else if (button.tag == dButt)
    {
        
    } else if (button.tag == iButt)
    {
        nameLab.text = @"This application was created by: Brandon Sease.";
    }
}




- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    return (interfaceOrientation != UIInterfaceOrientationPortraitUpsideDown);
}

@end
