//
//  infoViewController.m
//  AOC2_Wk2
//
//  Created by Brandon Sease on 10/5/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import "infoViewController.h"

@interface infoViewController ()

@end

@implementation infoViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view.
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    return (interfaceOrientation == UIInterfaceOrientationPortrait);
}
-(IBAction)onClose:(id)sender

{
    [self dismissModalViewControllerAnimated:TRUE];
}

@end
