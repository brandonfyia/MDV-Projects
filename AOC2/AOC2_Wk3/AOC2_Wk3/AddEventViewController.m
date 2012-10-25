//
//  AddEventViewController.m
//  AOC2_Wk3
//
//  Created by Brandon Sease on 10/8/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import "AddEventViewController.h"

@interface AddEventViewController ()

@end

@implementation AddEventViewController

@synthesize delegate;

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        delegate = nil;
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    //Swipe gesture setup
    leftSwiper = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipe:)];
    leftSwiper.direction = UISwipeGestureRecognizerDirectionLeft;
    [swipeLeftLable addGestureRecognizer:leftSwiper];
    
    //Set Date Picker defaults
    [datePicker setTimeZone:[NSTimeZone localTimeZone]];
    [datePicker setMinimumDate:[NSDate date]];
    
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
    // e.g. self.myOutlet = nil;
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    return (interfaceOrientation == UIInterfaceOrientationPortrait);
}

//Date Picker
-(IBAction)onChange:(id)sender
{
    UIDatePicker *picker = (UIDatePicker*)sender;
    if (picker != nil)
    {
        chosenDate = picker.date;
    }
}

//Save button
-(void)onSwipe:(UISwipeGestureRecognizer*)recognizer
{
    if (recognizer.direction == UISwipeGestureRecognizerDirectionLeft)
    {
        //Save event text
        
        //Default Values
        NSMutableString *startOfText = [[NSMutableString alloc] initWithString:@"New Event: "];
        eventList = [[NSMutableString alloc] init];
        NSString *textToAdd = textField.text;
        
        //Format Date
        if (chosenDate == nil)
        {
            chosenDate = [NSDate date];
        }
        NSDateFormatter *formattedDate = [[NSDateFormatter alloc] init];
        [formattedDate setFormatterBehavior:NSDateFormatterBehavior10_4];
        [formattedDate setDateFormat:@" dd MMM, yyyy 'at' hh:mm a"];
        dateString = [formattedDate stringFromDate:chosenDate];

        //combine default opening with inputed text and date
        [startOfText appendString:textToAdd];
        [startOfText appendString:dateString];
        
        //Add combined text to another string for later print out
        [eventList appendFormat:@"%@\r",startOfText];
        
        //Rerun event printer function
        if (delegate != nil)
        {
            [delegate didClose:eventList];
        }
        
        //Close Add event view
        [self dismissViewControllerAnimated:TRUE completion:nil];
    }
}

//Close Keyboard
-(IBAction)onClick:(id)sender
{
    [textField resignFirstResponder];
}
@end
