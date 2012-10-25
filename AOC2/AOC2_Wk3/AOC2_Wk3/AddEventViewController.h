//
//  AddEventViewController.h
//  AOC2_Wk3
//
//  Created by Brandon Sease on 10/8/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol eventViewDelegate <NSObject>

@required
-(void)didClose:(NSMutableString*)eventList;

@end

@interface AddEventViewController : UIViewController

{
    IBOutlet UIDatePicker *datePicker;
    IBOutlet UITextField *textField;
    NSMutableString *startOfText;
    NSMutableString *eventList;
    NSDate *chosenDate;
    NSString *dateString;
    id<eventViewDelegate> delegate;
    IBOutlet UILabel *swipeLeftLable;
    UISwipeGestureRecognizer *leftSwiper;
}

@property (strong) id<eventViewDelegate> delegate;

-(IBAction)onChange:(id)sender;
-(IBAction)onClick:(id)sender;

@end

