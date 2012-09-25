//
//  ViewController.m
//  AOC1wk2
//
//  Created by Brandon Sease on 8/9/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
}

- (void)viewWillAppear:(BOOL)animated
{
    self.view.backgroundColor = [UIColor orangeColor];
    [super viewWillAppear:animated];
}

- (void)viewDidAppear:(BOOL)animated
{
    //Title Lable
    titleLable = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 20.0f, 300.0f, 20.0f)];
    if (titleLable != nil)
    {
        titleLable.text = @"Where the Red Fern Grows";
        titleLable.backgroundColor = [UIColor whiteColor];
        titleLable.textColor= [UIColor blackColor];
        titleLable.textAlignment = UITextAlignmentCenter;
        
    }
    [self.view addSubview:titleLable];
    
    //Author Lable
    authorLable = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 80.0f, 65.0f, 20.0f)];
    if (authorLable != nil)
    {
        authorLable.text = @"Author: ";
        authorLable.backgroundColor = [UIColor darkGrayColor];
        authorLable.textColor = [UIColor yellowColor];
        authorLable.textAlignment = UITextAlignmentRight;
        
    }
    [self.view addSubview:authorLable];
    
    //Author Name
    authorName = [[UILabel alloc] initWithFrame:CGRectMake(85.0f, 80.0f, 113.0f, 20.0f)];
    if (authorName != nil)
    {
        authorName.text = @" Wilson Rawls ";
        authorName.backgroundColor = [UIColor yellowColor];
        authorName.textColor = [UIColor darkGrayColor];
        authorName.textAlignment = UITextAlignmentLeft;
        
    }
    [self.view addSubview:authorName];
    
    //Published Lable
    publishedLable = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 120.0f, 90.0f, 20.0f)];
    if (publishedLable != nil)
    {
        publishedLable.text = @" Published: ";
        publishedLable.backgroundColor = [UIColor redColor];
        publishedLable.textColor = [UIColor greenColor];
        publishedLable.textAlignment = UITextAlignmentRight;
        
    }
    [self.view addSubview:publishedLable];
    
    //Published Date
    publishedDate = [[UILabel alloc] initWithFrame:CGRectMake(110.0f, 120.0f, 50.0f, 20.0f)];
    if (publishedDate != nil)
    {
        publishedDate.text = @" 1961 ";
        publishedDate.backgroundColor = [UIColor greenColor];
        publishedDate.textColor = [UIColor redColor];
        publishedDate.textAlignment = UITextAlignmentLeft;
        
    }
    [self.view addSubview:publishedDate];
    
    //Summary Lable
    summaryLable = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 160.0f, 90.0f, 20.0f)];
    if (summaryLable != nil)
    {
        summaryLable.text = @" Summary: ";
        summaryLable.backgroundColor = [UIColor cyanColor];
        summaryLable.textColor = [UIColor brownColor];
        summaryLable.textAlignment = UITextAlignmentLeft;
        
    }
    [self.view addSubview:summaryLable];
    
    //Summary Box
    summaryBox = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 200.0f, 300.0f, 100.0f)];
    if (summaryBox != nil)
    {
        summaryBox.text = @" Where the Red Fern Grows is a novel written by Wilson Rawls in 1961 about a boy who buys and trains two Redbone Coonhound hunting dogs. ";
        summaryBox.backgroundColor = [UIColor brownColor];
        summaryBox.textColor = [UIColor cyanColor];
        summaryBox.textAlignment = UITextAlignmentCenter;
        summaryBox.numberOfLines = 4;
        
        
    }
    [self.view addSubview:summaryBox];
    
    //List of Items Lable
    listOfItems = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 320.0f, 110.0f, 20.0f)];
    if (listOfItems != nil)
    {
        listOfItems.text = @" List of Items: ";
        listOfItems.backgroundColor = [UIColor magentaColor];
        listOfItems.textColor = [UIColor blueColor];
        listOfItems.textAlignment = UITextAlignmentLeft;
        
        
    }
    [self.view addSubview:listOfItems];
    
    //Arrays
    
    NSArray *staticA = [[NSArray alloc] initWithObjects:@"hounds, ", @"hunting, ", @"growing up, ", @"boy, ", @"racoons", nil ];
    
    NSMutableArray *mutableA = [[NSMutableArray alloc] initWithCapacity:5];
    
    for (int i=0; i<[staticA count]; i++)
    {
        [mutableA addObject:[staticA objectAtIndex:i]];
    }
    
    //List of Items ...List?
    lOI = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 360.0f, 300.0f, 100.0f)];
    if (lOI != nil)
    {
        lOI.text = (@"%@%@%@%@%@", [mutableA objectAtIndex:0], [mutableA objectAtIndex:1], [mutableA objectAtIndex:2], [mutableA objectAtIndex:3], [mutableA objectAtIndex:4]);
        lOI.backgroundColor = [UIColor blueColor];
        lOI.textColor = [UIColor magentaColor];
        lOI.textAlignment = UITextAlignmentCenter;
        summaryBox.numberOfLines = 8;
        
        
    }
    [self.view addSubview:lOI];
    
    [super viewDidAppear:animated];
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    return (interfaceOrientation != UIInterfaceOrientationPortraitUpsideDown);
}

@end
