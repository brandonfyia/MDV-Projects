//
//  ViewController.m
//  AOC2_Wk3
//
//  Created by Brandon Sease on 10/8/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import "ViewController.h"
#import "AddEventViewController.h"

@interface ViewController ()

@end


@implementation ViewController

//Save button
-(IBAction)onClick:(id)sender
{
    //Create default save function
    NSUserDefaults *savedEvents = [NSUserDefaults standardUserDefaults];
    if (savedEvents != nil)
    {
        //String to hold info
        NSString *savedEventsString = textView.text;
        //Set string to be saved
        [savedEvents setObject:savedEventsString forKey:@"events"];
        //Save string
        [savedEvents synchronize];
    }
}

- (void)viewDidLoad
{
    //Event List default
    eventString = [[NSMutableString alloc] init];
    
    
    //Load back in saved info
    NSUserDefaults *savedEvents = [NSUserDefaults standardUserDefaults];
    if (savedEvents != nil)
    {
        NSMutableString *savedEventsString = [savedEvents objectForKey:@"events"];
        if (savedEventsString != nil)
        {
            [eventString appendString:savedEventsString];
            textView.text = eventString;
        }
        
    }
    
    
    //Swipe gesture setup
    rightSwiper = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipe:)];
    rightSwiper.direction = UISwipeGestureRecognizerDirectionRight;
    [swipeRightLable addGestureRecognizer:rightSwiper];
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
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

//Event printer function
-(void)printEvents:(NSMutableString*)eventList
{
    // Display text in UITextView
    [eventString appendString:eventList];
    textView.text = eventString;
    
}


//Swipe for new event view
-(void)onSwipe:(UISwipeGestureRecognizer*)recognizer
{
    if (recognizer.direction == UISwipeGestureRecognizerDirectionRight)
    {
        //Init add event view
        AddEventViewController *addView = [[AddEventViewController alloc] initWithNibName:@"AddEventViewController" bundle:nil];
        if (addView !=nil)
        {
            addView.delegate = self;
            //Show add event view
            addView.modalTransitionStyle = UIModalTransitionStyleFlipHorizontal;
            [self presentViewController:addView animated:TRUE completion:nil];
        }
    }

}

-(void)didClose:(NSMutableString*)eventList
{
    [self printEvents:eventList];
}

@end
